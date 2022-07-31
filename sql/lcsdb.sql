-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 15, 2022 at 08:38 PM
-- Server version: 10.6.7-MariaDB-2ubuntu1
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `lcsdb`
--
CREATE DATABASE IF NOT EXISTS `lcsdb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;
USE `lcsdb`;

-- --------------------------------------------------------

--
-- Table structure for table `Class`
--

DROP TABLE IF EXISTS `Class`;
CREATE TABLE `Class` (
  `ClassID` int(11) NOT NULL,
  `CourseID` int(11) NOT NULL,
  `TeacherID` int(11) NOT NULL,
  `LocationID` int(11) NOT NULL,
  `Class_title` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `Class_date` date NOT NULL,
  `Class_time` time NOT NULL,
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `Enabled` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Table structure for table `Course`
--

DROP TABLE IF EXISTS `Course`;
CREATE TABLE `Course` (
  `CourseID` int(11) NOT NULL,
  `Course_name` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `Course_description` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `Enabled` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Table structure for table `Location`
--

DROP TABLE IF EXISTS `Location`;
CREATE TABLE `Location` (
  `LocationID` int(11) NOT NULL,
  `Address` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `Status` tinyint(1) NOT NULL DEFAULT 1,
  `CreatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `UpdatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `Enabled` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Table structure for table `Registration`
--

DROP TABLE IF EXISTS `Registration`;
CREATE TABLE `Registration` (
  `ClassID` int(11) NOT NULL,
  `StudentID` int(11) NOT NULL,
  `DOJ` datetime NOT NULL,
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `Enabled` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Table structure for table `Student`
--

DROP TABLE IF EXISTS `Student`;
CREATE TABLE `Student` (
  `StudentID` int(11) NOT NULL,
  `First_name` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `Last_name` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `DoB` date NOT NULL,
  `Gender` char(10) COLLATE utf8mb4_bin NOT NULL,
  `Email` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `PhoneNo` varchar(15) COLLATE utf8mb4_bin NOT NULL,
  `Note` text COLLATE utf8mb4_bin NOT NULL,
  `CreatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `UpdatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `Enabled` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Table structure for table `Teacher`
--

DROP TABLE IF EXISTS `Teacher`;
CREATE TABLE `Teacher` (
  `TeacherID` int(11) NOT NULL,
  `Description` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `First_name` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `Last_name` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `Phone` varchar(15) COLLATE utf8mb4_bin NOT NULL,
  `Gender` varchar(10) COLLATE utf8mb4_bin NOT NULL,
  `Email` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `Enabled` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
CREATE TABLE `User` (
  `Email` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `Name` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `Password` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `Photo` blob NOT NULL,
  `CreatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `UpdatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `Enabled` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `User`
--

INSERT INTO `User` (`Email`, `Name`, `Password`, `Photo`, `CreatedAt`, `UpdatedAt`, `Enabled`) VALUES
('testuser1@gmail.com', 'Nguyen Van Thanh', 'abc123', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
('testuser2@gmail.com', 'Test User 2', 'abc123', '', '2022-06-24 14:32:10', '2022-06-24 14:32:10', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Class`
--
ALTER TABLE `Class`
  ADD PRIMARY KEY (`ClassID`),
  ADD KEY `CourseID` (`CourseID`),
  ADD KEY `TeacherID` (`TeacherID`),
  ADD KEY `LocationID` (`LocationID`);

--
-- Indexes for table `Course`
--
ALTER TABLE `Course`
  ADD PRIMARY KEY (`CourseID`);

--
-- Indexes for table `Location`
--
ALTER TABLE `Location`
  ADD PRIMARY KEY (`LocationID`);

--
-- Indexes for table `Registration`
--
ALTER TABLE `Registration`
  ADD KEY `Registration_ibfk_2` (`ClassID`),
  ADD KEY `StudentID` (`StudentID`);

--
-- Indexes for table `Student`
--
ALTER TABLE `Student`
  ADD PRIMARY KEY (`StudentID`);

--
-- Indexes for table `Teacher`
--
ALTER TABLE `Teacher`
  ADD PRIMARY KEY (`TeacherID`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`Email`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Class`
--
ALTER TABLE `Class`
  ADD CONSTRAINT `Class_ibfk_1` FOREIGN KEY (`CourseID`) REFERENCES `Course` (`CourseID`),
  ADD CONSTRAINT `Class_ibfk_2` FOREIGN KEY (`TeacherID`) REFERENCES `Teacher` (`TeacherID`),
  ADD CONSTRAINT `Class_ibfk_3` FOREIGN KEY (`LocationID`) REFERENCES `Location` (`LocationID`);

--
-- Constraints for table `Registration`
--
ALTER TABLE `Registration`
  ADD CONSTRAINT `Registration_ibfk_2` FOREIGN KEY (`ClassID`) REFERENCES `Class` (`ClassID`),
  ADD CONSTRAINT `Registration_ibfk_3` FOREIGN KEY (`StudentID`) REFERENCES `Student` (`StudentID`);
COMMIT;
