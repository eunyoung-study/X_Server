use aidetect;

create table users (
	idx int auto_increment primary key,
    userid varchar(50) unique not null,
    password varchar(200) not null,
    name varchar(20) not null,
    email varchar(50) not null,
    url varchar(200)
);

-- 이미 users에 name도 있고, userid에는 글자보단 숫자를 넣으려고 설계 
create table posts (
	id int auto_increment primary key,
    useridx int not null,
    createAt datetime default now(),
    text varchar(2000) not null,
    foreign key(useridx) references users(idx)
);