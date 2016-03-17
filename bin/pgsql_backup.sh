#!/bin/bash

# 备份PostgreSQL数据库
# 支持以下命令: 
#     base:     进行一个基础备份
#     archive:  归档数据库日志(用于设置postgresql.conf中的archive_command参数)
#     xlog:     复制当前部分填充的日志段
#     clean:    删除指定日期之前的备份数据
#

#database=/raid/postgresql/8.1/main
#backup=/data/backup/database

PATH=/usr/local/bin:/usr/bin:/bin:$PATH

. $(dirname $0)/pgsql_backup.conf

check()
{
	if [ ! -d $database/base ]; then
		echo "Database directory is wrong!"
		return 1
	fi
}

base()
{
	local v=$(date "+%Y%m%d")
	local d="$backup/base/$v"
	mkdir -p "$d"

#	vacuumdb -afz
	psql shopping -c "select pg_start_backup('$v');"
	(cd "$database"; cp -a $(ls | sed 's/pg_xlog//') "$d")
	psql shopping -c "select pg_stop_backup();"
}

# Linux:
#    archive_command = '/bin/sh /home/ruite/ruite/bin/pgsql_backup.sh archive %p %f'
# Windows:
#    archive_command = 'c:/msys/bin/sh /d/work/ruite/bin/pgsql_backup.sh archive %p %f'
archive()
{
	local p="$1"
	local f="$2"

	mkdir -p "$backup/archive"

	if [ "$p" == "" ] || [ "$f" == "" ] || [ -f "$backup/archive/$f" ]; then
		return 1
	fi

	cp -a "$p" "$backup/archive/$f"
	
	return 0;
}

xlog()
{
	mkdir -p "$backup"
	
	cp -a "$database/pg_xlog" "$backup/pg_xlog_new"
	if [ "$?" == "0" ]; then
		(
			cd $backup
			rm -rf pg_xlog
			mv pg_xlog_new pg_xlog
		)
	fi
}

clean()
{
	local t=$(echo "$1" | grep -E '^[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}( [0-9]{1,2}(:[0-9]{1,2})?)?$')

	if [ "$t" = "" ]; then
		echo "Timestamp '$1' error"
		return 1
	fi
	
	touch -d "$t" "$backup/base/timestamp"
	echo -n "Clean backup files before $(date -r "$backup/base/timestamp" +"%Y-%m-%d %H:%M")? [y/N] "
	read a
	if [ "$a" != "y" ]; then
		return 1
	fi
	
	echo "cleaning..."

	find $backup/archive -mindepth 1 -maxdepth 1 -not -newer $backup/base/timestamp -print -exec rm -rf {} \;
	find $backup/base -mindepth 1 -maxdepth 1 -not -newer $backup/base/timestamp -print -exec rm -rf {} \;

	echo "done."
}


case $1 in
	base)
		base
		;;
	archive)
		archive "$2" "$3"
		;;
	clean)
		clean "$2"
		;;
	xlog)
		xlog
		;;
	*)
		echo "usage: $0 {base|archive|xlog|clean}"
		exit 1
		;;
esac
