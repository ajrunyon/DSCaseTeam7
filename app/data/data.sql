USE ocfrdatabase;

CREATE TABLE Certifications(
	certID int(3) PRIMARY KEY,
	agency varchar(100),
	certname varchar(100),
	expires int(2)
);

INSERT into Certifications(certID, agency, certname, expires) VALUES
("101", "American Heart Association", "CPR for Healthcare Providers", "2"),
("207", "Athens Technical College", "Firefighter", "3"),
("308", "Georgia POST Academy", "POST", "5");

CREATE TABLE Member(
memberID int(5) PRIMARY KEY,
firstName varchar(50) not null,
lastName varchar(50) not null,
position varchar(100),
email varchar(100),
workphone varchar(20),
mobilephone varchar(20),
radioNum int(3),
station varchar(100),
isActive char(1),
gender char(1),
address varchar(255),
DOB date,
startDate date
);

INSERT into Member(memberID, firstName, lastName, position, email, workphone, mobilephone, radioNum, station, isActive, gender, address, DOB, startDate) VALUES
("50038", "Kathryn", "Pride", "Chief", "kpryde@ocfr.gov","707-555-1234","707-555-2345","199","(all)","Y","F","1123 Xavier School Dr Watkinsville, GA 30677","1974-11-29","1999-04-15"),
("50061","Piotr","Rasputin","Deputy Chief", "prasput@ocfr.gov","707-555-0987","206-555-9876","841","8","Y","M","A31 Mother Russia Road Seattle, WA 98133","1982-12-03","2004-02-22"),
("40039","Warren","Worthington","Crew Chief","wworthing@ocfr.gov","706-555-3945","304-555-4657", "321","1","Y","M","1140 Experiment Station Road Watkinsville, GA 30677","1973-06-13","1990-01-01"),
("30099","James","McTominay","Firefighter","jmctom@ocfr.gov","706-555-1029","705-555-2389","124","1","Y","M","1450 Cherrywood Lane Watkinsville, GA 30677","1990-10-07","2014-08-06");

CREATE TABLE MemberCert(
memCert int(5) PRIMARY KEY,
memberID int(5),
datecertified date,
expirationDate date,
certID int(3),
FOREIGN KEY (memberID) REFERENCES Member(memberID),
FOREIGN KEY (certID) REFERENCES Certifications(certID)
);
