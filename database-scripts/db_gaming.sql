-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-10-2021 a las 21:11:49
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_gaming`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `employee`
--

CREATE TABLE `employee` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `fileName` varchar(20) NOT NULL,
  `description` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `employee`
--

INSERT INTO `employee` (`id`, `name`, `fileName`, `description`) VALUES
(1, 'Samantha', 'Samantha.png', 'Maintenance'),
(2, 'James', 'James.png', 'Web manager'),
(3, 'Rita', 'Rita.png', 'Assistant'),
(4, 'Adrian', 'Adrian.png', 'Admin'),
(5, 'Olivia', 'Olivia.png', 'Sponsor'),
(6, 'Roberto', 'Roberto.png', 'Sales director');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `technology`
--

CREATE TABLE `technology` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `price` varchar(45) NOT NULL,
  `fileName` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `technology`
--

INSERT INTO `technology` (`id`, `name`, `price`, `fileName`) VALUES
(1, 'RTX 2060', '379$', 'RTX 2060.jpg'),
(2, 'RAM HyperX Fury', '84.50$', 'RAM HyperX Fury.jpg'),
(3, 'HP Desktop Pavilion Gaming', '799$', 'HP Desktop Pavilion Gaming.jpg'),
(4, 'Wireless Mouse', '12$', 'Wireless Mouse.jpg'),
(5, 'Mechanical Keyboard', '40.14$', 'Mechanical Keyboard.jpg'),
(144, 'HP Elite Desktop Computer', '459$', 'HP Elite Desktop Computer.jpg'),
(145, 'Logitech Gaming Mouse', '30$', 'Logitech Gaming Mouse.jpg'),
(149, 'RAM HyperX Predator', '135$', 'RAM HyperX Predator.jpg'),
(150, 'Dell OptiPlex Desktop', '670$', 'Dell OptiPlex Desktop.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `technology`
--
ALTER TABLE `technology`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `technology`
--
ALTER TABLE `technology`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=151;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
