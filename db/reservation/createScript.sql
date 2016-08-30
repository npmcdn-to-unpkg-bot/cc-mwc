
DROP TABLE TUTOR_AVAILABILITY;
DROP TABLE APPOINTMENTS;
DROP TABLE TUTOR_SPECIALTY;
DROP TABLE TUTOR;
DROP TABLE VALID_SPECIALTY;
DROP TABLE OPERATING_HOURS;
DROP TABLE HOLIDAY_SPECIAL_EVENT;
DROP TABLE TUTEE;


CREATE TABLE TUTOR
(
    Email VARCHAR(255) NOT NULL,
    Fname VARCHAR(20) NOT NULL,
    Lname VARCHAR(20) NOT NULL,

    PRIMARY KEY (Email)
);

CREATE TABLE VALID_SPECIALTY
(
    Name VARCHAR(255),
    Course_id VARCHAR(255),

    PRIMARY KEY(Course_id)
);

CREATE TABLE TUTOR_SPECIALTY
(
    TS_course_specialty VARCHAR(255) NOT NULL,
    TS_email VARCHAR(255) NOT NULL,

    PRIMARY KEY (TS_email, TS_course_specialty ),
    FOREIGN KEY (TS_email) REFERENCES TUTOR(Email),
    FOREIGN KEY (TS_course_specialty) REFERENCES VALID_SPECIALTY(Course_id)
);

CREATE TABLE TUTOR_AVAILABILITY
(
    Shift_start Time NOT NULL,
    Shift_end Time NOT NULL,
    Day_of_week DATE NOT NULL,
    Tutor VARCHAR(255) NOT NULL,

    PRIMARY KEY (Tutor, Day_of_week, Shift_start),
    FOREIGN KEY (Tutor) REFERENCES TUTOR(Email),

    CONSTRAINT Shift_start CHECK (Shift_start < Shift_end)
);

CREATE TABLE OPERATING_HOURS
(
    OH_Day_of_week DATE NOT NULL,
    Open_time TIME NOT NULL,
    Close_time TIME NOT NULL,

    PRIMARY KEY(OH_Day_of_week),

    CONSTRAINT Open_time CHECK (Open_time < Close_time)

);

CREATE TABLE HOLIDAY_SPECIAL_EVENT
(
    HSE_Date DATE NOT NULL,
    isOpen BIT NOT NULL,
    HSE_Open_time TIME,
    HSE_Close_time TIME,

    PRIMARY KEY (HSE_Date),

    CONSTRAINT HSE_Open_time CHECK (HSE_Open_time < HSE_Close_time)
);

CREATE TABLE TUTEE
(
    Tutee_email VARCHAR(255) NOT NULL,
    Phone_number VARCHAR(12),
    Fname VARCHAR(20) NOT NULL,
    Lname VARCHAR(20) NOT NULL,

    PRIMARY KEY (Tutee_email)
);

CREATE TABLE APPOINTMENTS
(
    APP_Date DATE NOT NULL,
    APP_Time TIME NOT NULL,
    isOutstandingOffice BIT NOT NULL,
    isOutstandingTutor BIT NOT NULL,
    Tutor_email VARCHAR(255) NOT NULL,
    Class VARCHAR(255),
    APP_Tutee_email VARCHAR(255) NOT NULL,
    
    PRIMARY KEY (Tutor_email, APP_Date, APP_Time),
    FOREIGN KEY (Tutor_email) REFERENCES TUTOR(Email),
    FOREIGN KEY (APP_Tutee_email) REFERENCES TUTEE(Tutee_email)
);
