
INSERT INTO TUTEE (Tutee_email, Phone_number, Fname, Lname)
VALUES 
	('TravisB@example.com', 14255557799, 'Travis', 'Browne'),
	('JonJ@example.com', 12535559900, 'Jon', 'Jones'),
	('ChuckL@example.com', 17245555309, 'Chuck', 'Liddell'),
	('DemetriousJ@example.com', null, 'Demetrious', 'Johnson');

INSERT INTO TUTOR (Email, Fname, Lname)
VALUES 
	('CyrusS@example.com', 'Cyrus', 'Sarkosh'),
	('MichaelN@example.com', 'Michael', 'Nissenson'),
	('BobR@example.com', 'Bob', "Ross"),
	('RonP@example.com', 'Ron', 'Paul'),
	('AngelinaJ@example.com', 'Angelina', 'Jolie');

INSERT INTO OPERATING_HOURS (OH_Day_of_week, Open_time, Close_time)
VALUES 
	('1970-01-04', '09:00:00', '17:00:00'),
	('1970-01-05', '09:00:00', '17:00:00'),
	('1970-01-06', '09:00:00', '17:00:00'),
	('1970-01-07', '09:00:00', '17:00:00'),
	('1970-01-01', '09:00:00', '17:00:00'),
	('1970-01-02', '09:00:00', '17:00:00'),
	('1970-01-03', '09:00:00', '17:00:00');

INSERT INTO HOLIDAY_SPECIAL_EVENT (HSE_Date, isOpen, HSE_Open_time, HSE_Close_time)
VALUES 
	('2016-08-31', 0, '13:00:00', '15:00:00'),
	('2016-09-02', 1, '14:30:00', '15:41:00');

INSERT INTO VALID_SPECIALTY (Name, Course_id)
VALUES 
	('Calculus I', 'MATH& 151'),
	('Calculus II', 'MATH& 152'),
	('Calculus III', 'MATH& 153'),
	('Calculus IV', 'MATH& 254'),
	('Precalculus I', 'MATH& 141'),
	('Precalculus II', 'MATH& 142'),
	('Linear Algebra', 'MATH 208'),
	('Differential Equations', 'MATH 238');

INSERT INTO TUTOR_SPECIALTY (TS_course_specialty, TS_email)
VALUES 
	('MATH& 152', 'CyrusS@example.com'),
	('MATH& 153', 'CyrusS@example.com'),
	('MATH& 151', 'CyrusS@example.com'),
	('MATH 208', 'MichaelN@example.com'),
	('MATH 238', 'MichaelN@example.com'),
	('MATH& 141', 'BobR@example.com'),
	('MATH& 142', 'BobR@example.com'),
	('MATH& 254', 'AngelinaJ@example.com'),
	('MATH& 254', 'RonP@example.com');

INSERT INTO TUTOR_AVAILABILITY (Shift_start, Shift_end, Day_of_week, Tutor)
VALUES 
	('09:00:00', '13:00:00', '1970-01-05', 'CyrusS@example.com'),
	('09:00:00', '13:00:00', '1970-01-06', 'CyrusS@example.com'),
	('09:00:00', '13:00:00', '1970-01-07', 'CyrusS@example.com'),
	('09:00:00', '13:00:00', '1970-01-01', 'CyrusS@example.com'),
	('13:00:00', '17:00:00', '1970-01-05', 'MichaelN@example.com'),
	('13:00:00', '17:00:00', '1970-01-06', 'MichaelN@example.com'),
	('13:00:00', '17:00:00', '1970-01-07', 'MichaelN@example.com'),
	('13:00:00', '17:00:00', '1970-01-01', 'MichaelN@example.com'),
	('11:00:00', '15:00:00', '1970-01-05', 'BobR@example.com'),
	('11:00:00', '15:00:00', '1970-01-07', 'BobR@example.com'),
	('11:00:00', '15:00:00', '1970-01-06', 'RonP@example.com'),
	('11:00:00', '15:00:00', '1970-01-01', 'RonP@example.com'),
	('11:00:00', '15:00:00', '1970-01-05', 'AngelinaJ@example.com'),
	('11:00:00', '15:00:00', '1970-01-07', 'AngelinaJ@example.com');

INSERT INTO APPOINTMENTS (APP_Date, APP_Time, isOutstandingOffice, isOutstandingTutor, Tutor_email, Class, APP_Tutee_email)
VALUES 
	('2016-09-01', '10:00:00', 0, 1, 'CyrusS@example.com', 'MATH& 152', 'DemetriousJ@example.com'),
	('2016-09-02', '14:00:00', 0, 0, 'MichaelN@example.com', 'MATH 238', 'JonJ@example.com');

