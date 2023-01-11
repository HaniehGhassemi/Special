-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jan 11, 2023 at 06:55 AM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Test`
--

-- --------------------------------------------------------

--
-- Table structure for table `Ticket`
--

CREATE TABLE `Ticket` (
  `id` int(11) NOT NULL,
  `cap` int(11) NOT NULL,
  `idbtn` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Ticket`
--

INSERT INTO `Ticket` (`id`, `cap`, `idbtn`) VALUES
(17, 3, 1),
(18, 3, 14),
(19, 10, 14);

-- --------------------------------------------------------

--
-- Table structure for table `Times`
--

CREATE TABLE `Times` (
  `id` int(200) NOT NULL,
  `hour` int(200) NOT NULL,
  `cap` int(200) NOT NULL,
  `sex` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Times`
--

INSERT INTO `Times` (`id`, `hour`, `cap`, `sex`) VALUES
(741, 8, 100, '2'),
(742, 8, 100, '1'),
(743, 8, 100, '1'),
(744, 8, 100, '3'),
(745, 8, 100, '3'),
(746, 8, 100, '1'),
(747, 8, 100, '1'),
(748, 8, 100, '1'),
(749, 8, 100, '1'),
(750, 8, 100, '1'),
(751, 8, 100, '2'),
(752, 8, 100, '1'),
(753, 8, 100, '3'),
(754, 8, 100, '3');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Ticket`
--
ALTER TABLE `Ticket`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Times`
--
ALTER TABLE `Times`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Ticket`
--
ALTER TABLE `Ticket`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `Times`
--
ALTER TABLE `Times`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=755;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
