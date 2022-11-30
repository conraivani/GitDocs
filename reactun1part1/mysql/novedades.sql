-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 30-11-2022 a las 07:30:53
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `miportfolio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `subtitulo` text COLLATE utf8_unicode_ci NOT NULL,
  `cuerpo` text COLLATE utf8_unicode_ci NOT NULL,
  `link` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `img_id` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `link`, `img_id`) VALUES
(1, 'Argentina Programa 4.0', 'Plan nacional, federal e inclusivo de formación en programación y software.', 'Se trata de un programa nacional y federal que tiene como objetivo capacitar a personas en lenguajes y conocimientos sobre programación, testing y habilidades digitales para potenciar la empleabilidad en el sector del software y la tecnología.\r\n\r\nEl programa es impulsado por el Ministerio de Economía de la Nación con apoyo de un consejo consultivo especializado y tiene como principales objetivos:\r\n\r\nCapacitar a más de 70 mil personas en el transcurso de un año para que adquieran conocimientos y herramientas relacionadas a la industria del software y promover su inserción laboral en el sector.\r\n\r\nArticular las necesidades del mercado con la formación de más personas en tecnología.\r\n\r\nGenerar valor agregado a los sectores industriales tradicionales y no tradicionales.', 'https://www.perfil.com/noticias/economia/argentina-programa-40-como-inscribirse-y-cuales-son-los-requisitos.phtml', NULL),
(2, 'Estas son las 200 contraseñas más utilizadas y más fáciles de descubrir de 2022', 'El administrador de contraseñas NordPass publicó, como otros años, la lista de las más populares y más inseguras, como “password” o “123456″', 'Según detalla la lista (que no especifica datos para la Argentina), en España la contraseña que más se repite es ‘123456′, que puede ser descifrada en menos de un segundo y que ha sido utilizada para más de 10.400 cuentas. El segundo puesto continúa en la misma línea, ya que es ‘123456789′, la misma contraseña que han usado 4680 veces los españoles y que también se puede descifrar en menos de un segundo.\r\n\r\nLa siguiente más popular es ‘swing’, que aumenta el tiempo para descifrarla en seis segundos y que tiene un recuento de 3265 veces utilizada. ‘12345′, ‘12345678′, ‘1234′ o ‘000000′, también entran en el top 10 de contraseñas más repetidas y fáciles, todas ellas con posibilidad de ser reveladas en menos de un segundo.\r\n\r\nAdemás de combinaciones numéricas y alfanuméricas variadas, también aparecen muchos nombres en esta lista de contraseñas populares. ‘alicia’ (192 veces utilizada), ‘isabel’ (192), ‘pepito’ (209) o ‘santiago’ (208), son algunos ejemplos.', 'https://www.lanacion.com.ar/tecnologia/estas-son-las-200-contrasenas-mas-utilizadas-y-mas-faciles-de-descubrir-de-2022-nid18112022/', NULL),
(4, 'prueba', 'prueba1', 'prueba', 'prueba.com', 'ecjbdhvah2inj0pzhcyr'),
(7, 'prueba', 'prueba2', 'fsfs', '.com', 'ui0elnvor629pwli91tg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
