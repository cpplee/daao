#!/bin/sh

if [ ! -z "$(set | /bin/grep msys)" ]; then 
	PATH=/usr/bin:/bin:$PATH
fi

list_tables()
{
	psql "$database" << _EOF_ | sed '1d' | awk '{print $3}' | sort
		\encoding GBK
		\t
		\dt
_EOF_
}

list_table_detail()
{
	psql "$database" << _EOF_
		\encoding GBK
		\d "$1"
_EOF_
}

list_functions()
{
	psql "$database" << _EOF_
		\encoding GBK
		\df public.*
_EOF_
}

dump()
{
	# list all table names
	for t in $(list_tables); do
		echo table: $t
	done

	# list functions
	echo 
	echo =====================
	echo
	list_functions
	
	# list columns of each table
	for t in $(list_tables); do
		echo 
		echo ---------------
		echo
		list_table_detail $t
	done
}

if [ -z "$1" ]; then
	echo usage: "$0 <database name>"
fi

database=$1;

dump
