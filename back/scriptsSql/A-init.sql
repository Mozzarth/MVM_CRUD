create database if not exists MVM_CRUD;
ALTER USER 'USER_MVM_CRUD' IDENTIFIED WITH mysql_native_password BY 'PASS_MVM_CRUD';
USE MVM_CRUD;

create table if not exists users(
				   idUser BINARY(16) not null primary key,
                   nombre nvarchar(50) not null,
                   apellido nvarchar(50) not null,
                   email nvarchar(100) not null,
                   telefono numeric not null,
                   active bit not null,
                   dateUpdate datetime null,
                   created datetime not null );