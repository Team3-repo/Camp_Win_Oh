-- 建立資料庫語法
-- 加上預設的文字編碼(建議設定)
CREATE DATABASE `camp3`
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

USE `camp3`;

SET SQL_SAFE_UPDATES = 0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

-- ----------------------------
-- 搜尋引擎 search engineevent_holding_list
-- ----------------------------
DROP TABLE IF EXISTS `place`;
-- 營區地點 place 的資料表
CREATE TABLE `place`
(
  `pos_no` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `position` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`pos_no`),
  UNIQUE KEY (`position`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 傾印資料表的資料 `place`
INSERT INTO `place` VALUES
('pos1', '北部'),
('pos2', '中部'),
('pos3', '南部'),
('pos4', '東部');
-- --------------------------------------------------------
DROP TABLE IF EXISTS `camping_theme_list`;
-- 露營主題 camping_theme_list 的資料表
CREATE TABLE `camping_theme_list` (
  `cthe_no` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `camping_theme` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`cthe_no`),
  UNIQUE KEY (`camping_theme`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 傾印資料表的資料 `camping_theme_list`
INSERT INTO `camping_theme_list` VALUES
('c_the1', '豪華露營'),
('c_the2', '懶人露營'),
('c_the3', '常規露營(自搭帳露營)'),
('c_the4', '免裝備露營');
-- --------------------------------------------------------
DROP TABLE IF EXISTS `camping_type_list`;
-- 營區地點 camping_type_list 的資料表
CREATE TABLE `camping_type_list`
(
  `ctype_no` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `camping_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`ctype_no`),
  UNIQUE KEY (`camping_type`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 傾印資料表的資料 `camping_type_list`
INSERT INTO `camping_type_list` VALUES
('c_type1', '渡假村'),
('c_type2', '露營場'),
('c_type3', '露營車'),
('c_type4', '小木屋'),
('c_type5', '帳篷');
-- --------------------------------------------------------
DROP TABLE IF EXISTS `feature_category_list`;
-- 營區地點 feature_category_list 的資料表
CREATE TABLE `feature_category_list`
(
  `fc_no` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `feature_category` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`fc_no`),
  UNIQUE KEY (`feature_category`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 傾印資料表的資料 `feature_category_list`
INSERT INTO `feature_category_list` VALUES
('c_feat1', '附冷氣'),
('c_feat2', '高海拔'),
('c_feat3', '親子活動'),
('c_feat4', '海景'),
('c_feat5', '寵物友善'),
('c_feat6', '網美佈置'),
('c_feat7', '交通易達'),
('c_feat8', '星空夜景'),
('c_feat9', '雲海美景'),
('c_feat10', '森林景觀'),
('c_feat11', '夏日玩水'),
('c_feat12', '釣魚樂'),
('c_feat13', '平原景觀'),
('c_feat14', '湖景');
-- --------------------------------------------------------
DROP TABLE IF EXISTS `place_type_list`;
-- 營區地點 place_type_list 的資料表
CREATE TABLE `place_type_list`
(
  `pt_no` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `place_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`pt_no`),
  UNIQUE KEY (`place_type`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 傾印資料表的資料 `place_type_list`
INSERT INTO `place_type_list` VALUES
('c_place1', '草'),
('c_place2', '土壤'),
('c_place3', '碎石'),
('c_place4', '棧板'),
('c_place5', '水泥地'),
('c_place6', '雨棚');
-- --------------------------------------------------------
DROP TABLE IF EXISTS `child_fac`;
-- 資料表結構 `child_fac`
CREATE TABLE `child_fac` (
  `child_no` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `child_type`varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`child_no`),
  UNIQUE KEY (`child_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 傾印資料表的資料 `child_fac`
INSERT INTO `child_fac` VALUES
('Fac1', '親子設施'),
('Fac2', '嬰兒設施'),
('Fac3', '無');
-- --------------------------------------------------------
DROP TABLE IF EXISTS `services`;
-- 資料表結構 `services`
CREATE TABLE `services` (
  `ser_no` INT NOT NULL AUTO_INCREMENT,
  `ser_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`ser_no`),
  UNIQUE KEY (`ser_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 傾印資料表的資料 `services`
INSERT INTO `services` (`ser_no`, `ser_name`) VALUES
(1, '停車場'),
(2, '導覽服務'),
(3, '接送服務');
-- --------------------------------------------------------
DROP TABLE IF EXISTS `pet`;
-- 資料表結構 `pet`
CREATE TABLE `pet` (
  `pet_no` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `pet_type`varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`pet_no`),
  UNIQUE KEY (`pet_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 傾印資料表的資料 `pet`
INSERT INTO `pet` VALUES
('pet1', '可攜帶寵物'),
('pet2', '不可攜帶寵物');
-- --------------------------------------------------------
DROP TABLE IF EXISTS `camp_area_list`;
-- 營區地點 camp_area_list 的資料表
CREATE TABLE `camp_area_list`
(
  `ca_no` INT NOT NULL AUTO_INCREMENT,
  `camp_area` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`ca_no`),
  UNIQUE KEY (`camp_area`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 傾印資料表的資料 `camp_area_list`
INSERT INTO `camp_area_list` VALUES
(1, '供應熱水'),
(2, '公共廚房'),
(3, '公共衛浴'),
(4, '卡拉ok'),
(5, '商店/自動販賣機'),
(6, '垃圾場'),
(7, '投幣式洗衣機'),
(8, '烤肉區'),
(9, '無線wifi'),
(10, '無障礙設施'),
(11, '野餐桌'),
(12, '開火區'),
(13, '餐廳');
-- ----------------------------
-- room selected for book
-- ----------------------------
DROP TABLE IF EXISTS `food`;
-- 資料表結構 `food`
CREATE TABLE `food` (
  `food_no` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `food_type`varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`food_no`),
  UNIQUE KEY (`food_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 傾印資料表的資料 `food`
INSERT INTO `food` VALUES
('F1', '附早餐'),
('F2', '附午餐'),
('F3', '附晚餐'),
('F4', '附全餐'),
('F5', '無附餐');
-- ---------------------------------------------------

DROP TABLE IF EXISTS `bed_type`;
-- 資料表結構 `bed_type`
CREATE TABLE `bed_type` (
  `bed_no` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `bed_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`bed_no`),
  UNIQUE KEY (`bed_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 傾印資料表的資料 `bed_type`
INSERT INTO `bed_type` VALUES
('Bed1', '雙人床'),
('Bed2', '單人床'),
('Bed3', '睡袋');

-- ----------------------------
-- don't selected region
-- ----------------------------
DROP TABLE IF EXISTS `post_n`;
-- 北部 post_n 的資料表
CREATE TABLE `post_n`
(
  `nor_no` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `city_n` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`nor_no`),
  UNIQUE KEY (`city_n`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 傾印資料表的資料 `post_n`
INSERT INTO `post_n` VALUES
('nor1', '宜蘭縣'),
('nor2', '台北市'),
('nor3', '新北市'),
('nor4', '新竹市'),
('nor5', '新竹縣'),
('nor7', '桃園市'),
('nor8', '基隆市');
-- --------------------------------------------------------
DROP TABLE IF EXISTS `post_c`;
-- 中部 post_c 的資料表
CREATE TABLE `post_c`
(
  `cen_no` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `city_c` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`cen_no`),
  UNIQUE KEY (`city_c`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 傾印資料表的資料 `post_c`
INSERT INTO `post_c` VALUES
('cen1', '南投縣'),
('cen2', '雲林縣'),
('cen3', '彰化縣'),
('cen4', '台中市'),
('cen5', '苗栗縣');
-- --------------------------------------------------------
DROP TABLE IF EXISTS `post_s`;
-- 南部 post_s 的資料表
CREATE TABLE `post_s`
(
  `sou_no` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `city_s` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`sou_no`),
  UNIQUE KEY (`city_s`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 傾印資料表的資料 `post_s`
INSERT INTO `post_s` VALUES
('sou1', '屏東縣'),
('sou2', '嘉義縣'),
('sou3', '嘉義市'),
('sou4', '高雄市'),
('sou5', '台南市');
-- --------------------------------------------------------
DROP TABLE IF EXISTS `post_e`;
-- 東部 post_e 的資料表
CREATE TABLE `post_e`
(
  `eas_no` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `city_n` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`eas_no`),
  UNIQUE KEY (`city_n`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 傾印資料表的資料 `post_e`
INSERT INTO `post_e` VALUES
('eas1', '台東縣'),
('eas2', '花蓮縣');

-- ----------------------------
-- not selected
-- ----------------------------
DROP TABLE IF EXISTS `check_in_info`;
-- 資料表結構 `check_in_info`
CREATE TABLE `check_in_info` (
  `checkin_no` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `checkin_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`checkin_no`),
  UNIQUE KEY (`checkin_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 傾印資料表的資料 `check_in_info`
INSERT INTO `check_in_info` VALUES
('che1', '自助'),
('che2', '提早入住');
-- --------------------------------------------------------
DROP TABLE IF EXISTS `recreation`;

-- 資料表結構 `recreation`
CREATE TABLE `recreation` (
  `recra_no` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `recra_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`recra_no`),
  UNIQUE KEY (`recra_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 傾印資料表的資料 `recreation`
INSERT INTO `recreation` VALUES
('recra1', '游泳池'),
('recra2', '遊戲區'),
('recra3', '煙火'),
('recra4', '無人機');
-- --------------------------------------------------------
DROP TABLE IF EXISTS `room_feature`;

-- 資料表結構 `room_feature`
CREATE TABLE `room_feature` (
  `r_fea_no` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `r_fea_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`r_fea_no`),
  UNIQUE KEY (`r_fea_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 傾印資料表的資料 `room_feature`
INSERT INTO `room_feature` VALUES
('r_fea1', '山景'),
('r_fea2', '海景');
-- --------------------------------------------------------
DROP TABLE IF EXISTS `room_fac`;
-- 資料表結構 `room_fac`
CREATE TABLE `room_fac` (
  `fac_no` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `fac_type`varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`fac_no`),
  UNIQUE KEY (`fac_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 傾印資料表的資料 `room_fac`
INSERT INTO `room_fac` VALUES
('Fac2', '無障礙有善'),
('Fac3', '獨立衛浴'),
('Fac4', '公共衛浴'),
('Fac5', '廚房');

-- ----------------------------
-- 營地資訊 place_info 
-- ----------------------------
DROP TABLE IF EXISTS `place_info`;

-- 營地資訊 place_info 的資料表
CREATE TABLE `place_info` (
  `camp_id` INT NOT NULL AUTO_INCREMENT,
  `camp_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `open_time` varchar(9) DEFAULT NULL,
  `camp_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  -- -----fk-----
  `position` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `camping_theme` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `camping_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `feature_category` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `camp_area` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `place_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `child_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ser_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `pet_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `camp_pic` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`camp_id`),
  UNIQUE KEY (`camp_name`),
  
  CONSTRAINT `FK_position` FOREIGN KEY (`position`) REFERENCES `place`(`position`),
  CONSTRAINT `FK_camping_theme` FOREIGN KEY (`camping_theme`) REFERENCES `camping_theme_list`(`camping_theme`),
  CONSTRAINT `FK_camping_type` FOREIGN KEY (`camping_type`) REFERENCES `camping_type_list`(`camping_type`),
  CONSTRAINT `FK_feature_category` FOREIGN KEY (`feature_category`) REFERENCES `feature_category_list`(`feature_category`),
  CONSTRAINT `FK_place_type` FOREIGN KEY (`place_type`) REFERENCES `place_type_list`(`place_type`),
  CONSTRAINT `FK_child_type` FOREIGN KEY (`child_type`) REFERENCES `child_fac`(`child_type`),
  CONSTRAINT `FK_ser_name` FOREIGN KEY (`ser_name`) REFERENCES `services`(`ser_name`),
  CONSTRAINT `FK_pet_type` FOREIGN KEY (`pet_type`) REFERENCES `pet`(`pet_type`),
  CONSTRAINT `FK_camp_area` FOREIGN KEY (`camp_area`) REFERENCES `camp_area_list`(`camp_area`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 插入样例数据到 place_info 表
INSERT INTO `place_info` (`camp_id`, `camp_name`, `open_time`, `camp_address`, `camp_pic`, `position`, `camping_theme`, `camping_type`, `feature_category`, `place_type`, `child_type`, `ser_name`, `pet_type`, `camp_area`) VALUES
(1, '走馬賴農場', '上午 9:00', '台南市大內區二溪里唭子瓦60號', '/img/01.webp','南部', '豪華露營', '露營場', '附冷氣', '草', '嬰兒設施', '停車場', '可攜帶寵物', '公共衛浴'),
(2, '山Chill', '上午 10:00', '苗栗縣造橋鄉平興村菜坑2-5號','/img/02.webp', '中部', '懶人露營', '露營車', '親子活動', '土壤', '親子設施', '接送服務', '可攜帶寵物', '公共廚房'),
(3, '星空漫漫 Starry sky', '上午 11:00', '新竹縣尖石鄉28-1號','/img/03.webp', '北部', '常規露營(自搭帳露營)', '露營場', '高海拔', '棧板', '無', '導覽服務', '可攜帶寵物', '投幣式洗衣機'),
(4, '綠光森林', '上午 8:00', '南投縣仁愛鄉大同村', '/img/04.webp','中部', '免裝備露營', '小木屋', '親子活動', '水泥地', '親子設施', '停車場', '可攜帶寵物', '無障礙設施'),
(5, '露營天堂', '上午 9:30', '花蓮縣秀林鄉太魯閣村123號', '/img/05.webp','東部', '豪華露營', '渡假村', '寵物友善', '草', '嬰兒設施', '接送服務', '不可攜帶寵物', '商店/自動販賣機'),
(6, '海濱露營區', '上午 8:30', '屏東縣墾丁鄉南灣路456號', '/img/06.webp','南部', '懶人露營', '露營車', '海景', '碎石', '無', '導覽服務', '可攜帶寵物', '供應熱水'),
(7, '天空之城', '上午 10:00', '宜蘭縣冬山鄉清水村789號', '/img/07.webp','北部', '常規露營(自搭帳露營)', '帳篷', '高海拔', '土壤', '親子設施', '停車場', '不可攜帶寵物', '無線wifi'),
(8, '森林露營地', '上午 11:00', '台中市和平區梨山村123號','/img/08.webp', '中部', '免裝備露營', '小木屋', '親子活動', '棧板', '嬰兒設施', '接送服務', '可攜帶寵物', '垃圾場'),
(9, '月光露營區', '上午 9:00', '台東縣東河鄉都蘭村456號','/img/09.webp', '東部', '豪華露營', '露營場', '星空夜景', '水泥地', '親子設施', '導覽服務', '可攜帶寵物', '餐廳'),
(10, '山谷營地', '上午 9:00', '苗栗縣南庄鄉蓬萊村789號', '/img/10.webp','北部', '懶人露營', '帳篷', '交通易達', '草', '無', '停車場', '不可攜帶寵物', '野餐桌'),
(11, '海邊小屋', '上午 8:00', '台南市安平區漁光路123號','/img/11.webp', '南部', '豪華露營', '露營場', '海景', '草', '親子設施', '接送服務', '可攜帶寵物', '開火區'),
(12, '山中秘境', '上午 9:00', '南投縣仁愛鄉松柏嶺456號','/img/12.webp', '中部', '懶人露營', '露營車', '高海拔', '土壤', '嬰兒設施', '導覽服務', '不可攜帶寵物', '烤肉區'),
(13, '湖畔之家', '上午 10:00', '新竹縣關西鎮石門水庫789號','/img/13.webp', '北部', '常規露營(自搭帳露營)', '帳篷', '湖景', '棧板', '無', '停車場', '可攜帶寵物', '卡拉ok'),
(14, '森林小屋', '上午 11:00', '南投縣鹿谷鄉溪頭123號', '/img/14.webp','中部', '免裝備露營', '小木屋', '親子活動', '水泥地', '親子設施', '停車場', '不可攜帶寵物', '卡拉ok'),
(15, '沙灘樂園', '上午 7:30', '花蓮縣新城鄉七星潭456號', '/img/15.webp','東部', '豪華露營', '渡假村', '海景', '草', '嬰兒設施', '導覽服務', '可攜帶寵物', '餐廳'),
(16, '高山景觀', '上午 8:30', '屏東縣霧台鄉霧台村789號', '/img/16.webp','南部', '懶人露營', '露營車', '高海拔', '碎石', '無', '停車場', '不可攜帶寵物', '供應熱水'),
(17, '湖邊露營地', '上午 9:30', '宜蘭縣蘇澳鎮南方澳123號', '/img/17.webp','北部', '常規露營(自搭帳露營)', '帳篷', '湖景', '土壤', '親子設施', '接送服務', '可攜帶寵物', '無線wifi'),
(18, '綠野仙蹤', '上午 10:00', '台中市和平區谷關456號', '/img/18.webp','中部', '免裝備露營', '小木屋', '親子活動', '棧板', '嬰兒設施', '導覽服務', '不可攜帶寵物', '垃圾場'),
(19, '藍天白雲', '上午 8:00', '台東縣綠島鄉公館村789號', '/img/19.webp','東部', '豪華露營', '露營場', '星空夜景', '水泥地', '親子設施', '停車場', '可攜帶寵物', '公共衛浴'),
(20, '山林小徑', '上午 7:00', '苗栗縣南庄鄉南江村123號', '/img/20.webp','北部', '懶人露營', '露營車', '森林景觀', '草', '無', '接送服務', '不可攜帶寵物', '公共廚房'),
(21, '田園風光', '上午 9:00', '彰化縣田中鎮三角村456號', '/img/21.webp','中部', '常規露營(自搭帳露營)', '帳篷', '平原景觀', '土壤', '親子設施', '導覽服務', '可攜帶寵物', '投幣式洗衣機'),
(22, '大海之家', '上午 10:30', '澎湖縣馬公市中央街789號', '/img/22.webp','東部', '免裝備露營', '小木屋', '海景', '棧板', '嬰兒設施', '停車場', '不可攜帶寵物', '無障礙設施'),
(23, '雲海仙境', '上午 11:00', '南投縣信義鄉神木村123號', '/img/23.webp','中部', '豪華露營', '渡假村', '高海拔', '草', '無', '接送服務', '可攜帶寵物', '商店/自動販賣機'),
(24, '寂人樂品', '上午 9:00', '基隆市中正區中正路456號', '/img/24.webp','北部', '懶人露營', '露營車', '星空夜景', '碎石', '親子設施', '導覽服務', '不可攜帶寵物', '供應熱水'),
(25, '田野小屋', '上午 8:00', '嘉義縣阿里山鄉達邦村789號', '/img/25.webp','南部', '常規露營(自搭帳露營)', '帳篷', '平原景觀', '土壤', '嬰兒設施', '停車場', '可攜帶寵物', '無線wifi'),
(26, '水上樂園', '上午 7:30', '新竹市北區光華路123號', '/img/26.webp','北部', '免裝備露營', '小木屋', '湖景', '棧板', '親子設施', '接送服務', '不可攜帶寵物', '垃圾場'),
(27, '森林秘境', '上午 10:00', '台北市士林區至善路456號', '/img/27.webp','北部', '豪華露營', '露營場', '森林景觀', '水泥地', '無', '導覽服務', '可攜帶寵物', '餐廳'),
(28, '高山露營區', '上午 8:30', '南投縣埔里鎮中山路789號', '/img/28.webp','中部', '懶人露營', '露營車', '高海拔', '草', '親子設施', '停車場', '不可攜帶寵物', '野餐桌'),
(29, '湖畔樂園', '上午 9:00', '新北市新店區碧潭路123號', '/img/29.webp','北部', '常規露營(自搭帳露營)', '帳篷', '湖景', '土壤', '嬰兒設施', '接送服務', '可攜帶寵物', '開火區'),
(30, '鄉村田園', '上午 10:30', '台南市白河區關子嶺456號', '/img/30.webp','南部', '免裝備露營', '小木屋', '平原景觀', '棧板', '親子設施', '導覽服務', '不可攜帶寵物', '烤肉區');
-- ----------------------------
-- 會員資料 user_data
-- ----------------------------
DROP TABLE IF EXISTS `user_data`;
CREATE TABLE `user_data` (
  `user_id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `user_name` VARCHAR (200) NOT NULL,
  `password` VARCHAR (200) DEFAULT NULL,
  `email` VARCHAR (200) NOT NULL UNIQUE,
  `user_address` VARCHAR (200) DEFAULT NULL,
  `phone` VARCHAR (200) DEFAULT NULL,
  `birthday` VARCHAR (200) DEFAULT NULL,
  `gender` VARCHAR (200)DEFAULT NULL,
  `avatar` VARCHAR (200) DEFAULT NULL,
  unique key(`user_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `user_data`
--

INSERT INTO `user_data` (`user_id`, `user_name`, `password`, `email`, `user_address`, `phone`, `birthday`, `gender`, `avatar`) VALUES
(1, '袁冠謹', 'h5n23A63', 'sinatra9546@gmail.com', '彰化縣溪湖鎮二溪路2段51號之10', '0917070276', '1964-08-01', 'male', '/img/A0001.jpg'),
(2, '林得辛', 'th6mr772', 'teresa4655@hotmail.com', '臺中市太平區東村三街13號', '0939417503', '2016-01-06', 'female', '/img/A0002.jpg'),
(3, '黃亮悟', 'bC4GzH72', 'arnold6355@gmail.com', '臺中市大甲區經國路62號之18', '0924185028', '2013-03-30', 'female', '/img/A0003.jpg'),
(4, '傅昌道', '2kc2z6Qc', 'marissa4394@yahoo.com', '苗栗縣造橋鄉新庄仔80號10樓', '0937421669', '1965-02-16', 'female', '/img/A0004.jpg'),
(5, '劉年騏', 'ugSNRQCW', 'nancy3562@gmail.com', '屏東縣東港鎮新勝街86號之5', '0986160269', '2008-01-29', 'male', '/img/A0005.jpg'),
(6, '劉宥翊', 'FnmV665W', 'cullen7304@yahoo.com', '南投縣竹山鎮中央巷28號7樓之10', '0933996573', '1983-05-22', 'female', '/img/A0006.jpg'),
(7, '郭恆晤', 'uK287p3p', 'eugene8573@hotmail.com', '桃園市楊梅區草湳坡下70號', '0960984805', '1988-12-08', 'male', '/img/A0007.jpg'),
(8, '陳洋澤', 'm788L2VK', 'gutierrez933@gmail.com', '屏東縣長治鄉文學街3號之3', '0954439815', '2020-09-08', 'male', '/img/A0008.jpg'),
(9, '林瀾芬', 'UprL86my', 'crouch3821@yahoo.com', '宜蘭縣五結鄉和平路和平巷1號', '0952681447', '1969-01-29', 'female', '/img/A0009.jpg'),
(10, '劉庭莉', '4T7mf9c8', 'turner8074@outlook.com', '花蓮縣吉安鄉東海一街99號', '0913007060', '1985-07-10', 'male', '/img/A0010.jpg'),
(11, '葉瑜蓁', '6S9d94Sn', 'courtney6410@hotmail.com', '屏東縣車城鄉統埔路80號11樓', '0954530759', '1971-05-30', 'female', '/img/A0011.jpg'),
(12, '連瓊穎', '2c8T3t4u', 'isabel1858@gmail.com', '臺南市仁德區仁中五街74號2樓之18', '0930440032', '1990-08-06', 'female', '/img/A0012.jpg'),
(13, '袁波雪', 'cPx96fK8', 'farmiga3084@gmail.com', '嘉義市西區國聖二街4號10樓', '0933158561', '1965-06-02', 'female', '/img/A0013.jpg'),
(14, '歐卓秀', 'B6yH89yW', 'lawson5599@yahoo.com', '高雄市三民區博仁街14號10樓', '0923842008', '2008-09-12', 'male', '/img/A0014.jpg'),
(15, '傅力穎', 'SdMs5XT5', 'mia1299@gmail.com', '臺中市大里區校前路99號2樓', '0931406977', '1985-04-07', 'female', '/img/A0015.jpg'),
(16, '鐘丞吉', 'RdPWb24s', 'thompson6712@icloud.com', '嘉義市東區噴水商場76號', '0932386592', '1993-04-21', 'female', '/img/A0016.jpg'),
(17, '黃堇棋', '2Fzpzs7U', 'harmon1481@gmail.com', '宜蘭縣員山鄉溪洲路5號', '0932748461', '2016-06-03', 'female', '/img/A0017.jpg'),
(18, '黃晏汝', 'yX82t273', 'cheryl4467@gmail.com', '南投縣草屯鎮中正路底巷8號11樓', '0933659036', '1989-11-25', 'female', '/img/A0018.jpg'),
(19, '郭康賢', 'gKzLN77d', 'butler2572@gmail.com', '臺北市士林區環河北路３段9號6樓', '0916127955', '2000-08-30', 'female', '/img/A0019.jpg'),
(20, '白於禎', '4puE6PNy', 'watson5565@yahoo.com', '嘉義縣布袋鎮虎尾寮4號', '0956644100', '2009-02-07', 'female', '/img/A0020.jpg'),
(21, '曾以新', '7eZa4u69', 'shields363@outlook.com', '新北市三重區富福街47號之1', '0916032385', '1994-08-11', 'female', '/img/A0021.jpg'),
(22, '黃思玲', '5hwCGfed', 'terry7816@yahoo.com', '臺東縣臺東市新站三街81號', '0952859508', '2009-11-28', 'male', '/img/A0022.jpg'),
(23, '江峻軒', '96JumNG8', 'debra7713@gmail.com', '臺中市石岡區豐勢路廣成巷69號', '0924666844', '1961-07-29', 'female', '/img/A0023.jpg'),
(24, '鍾家鋭', '2U52KGZb', 'cole8549@gmail.com', '臺南市安平區效忠街27號5樓', '0970205929', '2018-04-06', 'male', '/img/A0024.jpg'),
(25, '鍾盛雅', 'tPs6eP6f', 'morales2136@gmail.com', '嘉義縣布袋鎮新北五街56號', '0911445841', '1960-12-30', 'female', '/img/A0025.jpg'),
(26, '宋冠妤', 'h244A23W', 'hannah7968@gmail.com', '彰化縣彰化市天祥路77號10樓', '0938428221', '2019-11-25', 'male', '/img/A0026.jpg'),
(27, '陳娟泓', '22Xr9eVe', 'zachary2869@gmail.com', '臺中市沙鹿區中正街21號之5', '0918432435', '2013-05-11', 'male', '/img/A0027.jpg'),
(28, '蔡梓鬱', '488663X5', 'jane3069@gmail.com', '臺中市潭子區甘水路2段13號10樓之17', '0972008943', '1972-07-25', 'male', '/img/A0028.jpg'),
(29, '溫堯悟', 'Ud6327QG', 'christopher5030@gmail.com', '苗栗縣苗栗市國馨33號', '0922172234', '2006-12-04', 'female', '/img/A0029.jpg'),
(30, '林晏璧', 'd9B6ASye', 'mallette4896@yahoo.com', '桃園市大溪區仁和二街80號之3', '0936274541', '1988-08-27', 'female', '/img/A0030.jpg'),
(31, '蕭林玉', '6bmb9TRG', 'corey3943@gmail.com', '彰化縣二林鎮中四路17號', '0958050151', '1983-02-18', 'female', '/img/A0031.jpg'),
(32, '童晉盛', '92np3Acr', 'amber4366@gmail.com', '新北市中和區和平路67號11樓', '0939288392', '2011-12-16', 'male', '/img/A0032.jpg'),
(33, '廖志鬆', 'w39L5g7q', 'kara5654@hotmail.com', '新北市淡水區自強路83號4樓', '0937534739', '1981-06-10', 'male', '/img/A0033.jpg'),
(34, '盧姣希', 'EmL7spkt', 'wood7500@outlook.com', '桃園市中壢區啟文路１段39號', '0970949745', '1977-07-05', 'male', '/img/A0034.jpg'),
(35, '郭堇易', '88G8rHBv', 'ryan9543@outlook.com', '苗栗縣頭份市尖下68號之16', '0931315020', '2019-10-29', 'female', '/img/A0035.jpg'),
(36, '陳嬌臻', 'z7J58789', 'jeffries8014@gmail.com', '桃園市楊梅區萬福街91號', '0925809331', '2001-01-11', 'female', '/img/A0036.jpg'),
(37, '曹彤馨', 'UcwBPWba', 'peterson2563@hotmail.com', '嘉義縣番路鄉北勢56號之14', '0932343251', '1989-09-06', 'male', '/img/A0037.jpg'),
(38, '葉淇賢', '8878aPva', 'middleton5847@gmail.com', '彰化縣彰化市慈生街51號3樓', '0960711504', '1962-05-01', 'female', '/img/A0038.jpg'),
(39, '李暉瀟', 'B2HWg5D4', 'daul8186@gmail.com', '桃園市平鎮區環南路69號之6', '0970173699', '2012-03-18', 'female', '/img/A0039.jpg'),
(40, '徐淇順', '5sZVXkUM', 'mark3992@gmail.com', '雲林縣古坑鄉新庄70號6樓', '0970975954', '2009-03-28', 'male', '/img/A0040.jpg'),
(41, '顏之俊', '8LWb7J66', 'edward2425@gmail.com', '高雄市苓雅區金門街13號7樓之7', '0934063903', '1967-07-15', 'male', '/img/A0041.jpg'),
(42, '鄭初嘉', '2e5TN497', 'banks2187@gmail.com', '臺中市大里區德芳路2段9號之16', '0989302457', '1972-04-01', 'female', '/img/A0042.jpg'),
(43, '田許雙', 'Lx9FC672', 'melanie5718@outlook.com', '臺東縣鹿野鄉鹿寮路52號12樓', '0963181608', '1991-01-04', 'male', '/img/A0043.jpg'),
(44, '王華風', '9pzR787b', 'harris1680@icloud.com', '桃園市蘆竹區興化路62號', '0955205524', '2009-12-25', 'male', '/img/A0044.jpg'),
(45, '涂霞露', 'Gs5Ta7n9', 'pattie5880@yahoo.com', '苗栗縣後龍鎮自強三街91號', '0921118083', '2015-11-05', 'female', '/img/A0045.jpg'),
(46, '傅妍思', '866A6238', 'perez6719@outlook.com', '新竹市香山區竹香北路36號6樓', '0910618098', '2017-04-08', 'female', '/img/A0046.jpg'),
(47, '王俞精', '22m6kGu5', 'nicole2737@outlook.com', '苗栗縣苗栗市中山路41號之11', '0938306800', '2002-12-10', 'male', '/img/A0047.jpg'),
(48, '陳一豔', 'NtCk32s7', 'matthew8755@outlook.com', '高雄市仁武區八德南路88號之11', '0954568023', '1987-10-31', 'female', '/img/A0048.jpg'),
(49, '洪福良', 'fg5x9see', 'blackwood7084@hotmail.com', '基隆市中山區復興路60號', '0971970841', '2007-03-22', 'female', '/img/A0049.jpg'),
(50, '趙陽齊', 'Satm22u2', 'thomas6995@gmail.com', '新北市八里區大崁腳55號之2', '0923310700', '1993-08-08', 'male', '/img/A0050.jpg'),
(51, '邱潤祉', '649p8z8d', 'briggs3220@gmail.com', '臺中市北區中達街44號2樓之16', '0923420431', '2001-07-07', 'male', '/img/A0051.jpg'),
(52, '洪克珂', '48Y9V4M4', 'lia1321@gmail.com', '臺東縣池上鄉新光路6號11樓', '0917925823', '1982-08-24', 'male', '/img/A0052.jpg'),
(53, '林林添', '9F62394c', 'bowen8712@hotmail.com', '屏東縣屏東市崇明二街79號', '0956707750', '1995-04-22', 'female', '/img/A0053.jpg'),
(54, '盧功承', 'Lzy9XY8A', 'burton5597@hotmail.com', '彰化縣田尾鄉民生路１段17號', '0937415192', '1973-11-25', 'female', '/img/A0054.jpg'),
(55, '孫康懷', 'c2sNmGUD', 'kennedy3461@gmail.com', '高雄市三民區臥龍路72號之5', '0953039633', '1998-11-12', 'male', '/img/A0055.jpg'),
(56, '蔡睿賢', 'S35vyNpV', 'fawcett702@yahoo.com', '屏東縣長治鄉園西一路5號', '0926688779', '1978-11-11', 'female', '/img/A0056.jpg'),
(57, '黃弘楷', 'A4bEf6Y8', 'mason489@yahoo.com', '彰化縣埤頭鄉王厝巷80號', '0916806447', '1981-09-09', 'male', '/img/A0057.jpg'),
(58, '陳樹福', 'dZ3su967', 'flores9340@gmail.com', '高雄市楠梓區宏毅二路北三巷68號', '0982760744', '2002-09-18', 'female', '/img/A0058.jpg'),
(59, '陳暢澤', 'Q2T667zr', 'alan6281@gmail.com', '宜蘭縣三星鄉電力路77號', '0933397920', '1972-05-07', 'female', '/img/A0059.jpg'),
(60, '洪景琳', 'dQ4LmQ2G', 'watson8335@gmail.com', '彰化縣秀水鄉鎮南巷80號11樓', '0989941678', '1965-08-29', 'female', '/img/A0060.jpg'),
(61, '梁平珈', '739K7eKG', 'cruz9139@gmail.com', '彰化縣和美鎮孝基路11號之20', '0970159374', '1993-01-24', 'male', '/img/A0061.jpg'),
(62, '魏益鬆', 'fP97XaVw', 'turner8761@hotmail.com', '高雄市仁武區仁孝路58號', '0982072728', '2002-06-16', 'male', '/img/A0062.jpg'),
(63, '曾鋒青', '53FK88La', 'alyssa160@gmail.com', '臺北市大同區南京西路56號', '0926834117', '2007-07-12', 'female', '/img/A0063.jpg'),
(64, '廖彬諺', 'xD7X393g', 'castillo6563@gmail.com', '高雄市旗山區中西巷46號', '0934563749', '1961-09-06', 'male', '/img/A0064.jpg'),
(65, '汪娜瑋', 'L38z33wR', 'sophie1728@gmail.com', '臺南市白河區中正路58號7樓', '0963044677', '1985-11-02', 'female', '/img/A0065.jpg'),
(66, '賴惠羽', 'SrVy69t7', 'olivia1977@gmail.com', '新北市淡水區山子頂43號8樓', '0971175638', '1982-04-03', 'female', '/img/A0066.jpg'),
(67, '孫姝正', '53TVRmm6', 'jenny7558@hotmail.com', '彰化縣和美鎮仁化路29號12樓', '0938105162', '2007-10-21', 'female', '/img/A0067.jpg'),
(68, '李璐研', '38J27652', 'gardner508@yahoo.com', '屏東縣屏東市豐華街55號之3', '0931292667', '1967-03-09', 'male', '/img/A0068.jpg'),
(69, '劉勳承', 'f2Mrf4A8', 'karen3511@gmail.com', '彰化縣和美鎮仁親路38號', '0917586291', '1977-12-22', 'female', '/img/A0069.jpg'),
(70, '馬磊謙', 'd2v3D8k2', 'carter4216@gmail.com', '苗栗縣苗栗市北苗35號', '0917274411', '1992-04-16', 'female', '/img/A0070.jpg'),
(71, '莊夢宣', 'P9s6an8C', 'diaz1660@outlook.com', '臺中市潭子區雅潭路2段83號4樓', '0958367362', '2000-09-17', 'female', '/img/A0071.jpg'),
(72, '陳城夫', '93XCS75M', 'cockburn3261@icloud.com', '臺中市北屯區環太東路6號', '0971586096', '2005-09-16', 'male', '/img/A0072.jpg'),
(73, '陳興賢', 'ra2634X5', 'liya9002@gmail.com', '高雄市燕巢區安招路7號9樓', '0919544074', '2011-04-25', 'female', '/img/A0073.jpg'),
(74, '溫亞涵', 'UPUN7VCh', 'rodney6829@hotmail.com', '宜蘭縣五結鄉復興五路80號6樓', '0989612827', '1965-01-03', 'female', '/img/A0074.jpg'),
(75, '巫健精', 'WA6XLFmU', 'kevin9823@hotmail.com', '嘉義縣太保市故宮大道14號', '0971686162', '1972-11-28', 'female', '/img/A0075.jpg'),
(76, '董叢然', 'w865APqK', 'dennis5894@yahoo.com', '桃園市楊梅區中山南路40號2樓', '0928620550', '1997-10-03', 'female', '/img/A0076.jpg'),
(77, '鄭凝喧', 'rf3qpKaG', 'garland2878@gmail.com', '高雄市燕巢區金山路66號', '0915255838', '1963-12-27', 'male', '/img/A0077.jpg'),
(78, '李寧薇', 'v6399KY8', 'gonzales9541@icloud.com', '彰化縣秀水鄉秀中街69號', '0920283775', '2019-05-16', 'male', '/img/A0078.jpg'),
(79, '黃泓禹', '54Q48Bft', 'bieber8052@outlook.com', '臺南市仁德區土庫一街30號', '0926194561', '1965-05-05', 'male', '/img/A0079.jpg'),
(80, '陳卿心', 'hsaa8DxJ', 'dinwiddie3096@hotmail.com', '臺中市南區信義南街97號', '0937807531', '2014-05-03', 'female', '/img/A0080.jpg'),
(81, '周卓慈', 'at53f53H', 'judy4867@gmail.com', '臺南市鹽水區康樂路1號6樓', '0927343076', '1979-12-10', 'male', '/img/A0081.jpg'),
(82, '林曄淼', 'ks52VA24', 'kieran1088@gmail.com', '彰化縣彰化市仁愛路35號11樓之11', '0921890034', '2001-04-25', 'male', '/img/A0082.jpg'),
(83, '唐坤達', 'c2tGkaL2', 'mendoza6556@gmail.com', '宜蘭縣冬山鄉內湖路57號3樓之8', '0921922560', '1967-04-27', 'female', '/img/A0083.jpg'),
(84, '嚴宇銀', '8bwg7h53', 'alan1240@gmail.com', '臺中市東區玉皇街1號', '0961204602', '2008-09-05', 'female', '/img/A0084.jpg'),
(85, '梁帆彰', '78UX224K', 'edith8126@outlook.com', '臺中市潭子區中山路2段67號之2', '0963052939', '1992-02-17', 'male', '/img/A0085.jpg'),
(86, '董奕茹', 'Z9y9LK8w', 'barbara4946@outlook.com', '雲林縣古坑鄉長安路22號', '0926525002', '1986-05-16', 'female', '/img/A0086.jpg'),
(87, '謝茜雨', 'J7N4uUJ4', 'sigrid2332@yahoo.com', '臺南市柳營區雙和路84號7樓', '0963256200', '1966-01-10', 'male', '/img/A0087.jpg'),
(88, '尤湘盈', 'WJN8s6NV', 'judith2149@gmail.com', '桃園市蘆竹區新南路１段35號', '0933213077', '1996-02-13', 'female', '/img/A0088.jpg'),
(89, '吳騏鑫', 'v2K6f7Xn', 'martinez4748@gmail.com', '臺南市關廟區文衡路5號之9', '0989432992', '1988-08-17', 'male', '/img/A0089.jpg'),
(90, '童以喧', 'L6BpG8QC', 'wright2037@gmail.com', '高雄市前鎮區鎮昌一巷84號8樓', '0915486446', '2013-03-18', 'male', '/img/A0090.jpg'),
(91, '劉慶謙', 'D22NT6U3', 'sterling801@gmail.com', '臺中市大里區大里路西里巷85號', '0929402389', '1999-10-22', 'female', '/img/A0091.jpg'),
(92, '翁珈茹', 'wSQ8T8cx', 'burton1353@gmail.com', '高雄市左營區自由二路21號11樓之11', '0916340136', '2019-01-19', 'female', '/img/A0092.jpg'),
(93, '尤佳和', 'hv48Zycr', 'jacob1083@gmail.com', '彰化縣鹿港鎮埔尾巷12號之17', '0956298328', '2007-08-08', 'male', '/img/A0093.jpg'),
(94, '歐意温', 'pe9qYqM3', 'jesse8880@outlook.com', '新竹縣芎林鄉倒別牛39號', '0926104082', '1977-05-16', 'female', '/img/A0094.jpg'),
(95, '楊思泓', '7UGPmcEQ', 'johnson6701@outlook.com', '彰化縣秀水鄉古蒼巷65號', '0982502459', '1983-02-21', 'female', '/img/A0095.jpg'),
(96, '黎好正', 's82Y37aQ', 'hernandez1759@gmail.com', '屏東縣內埔鄉嘉應路53號2樓之16', '0956976899', '2011-03-30', 'female', '/img/A0096.jpg'),
(97, '顏卓昌', '9z3J57ef', 'harmon8517@yahoo.com', '臺北市松山區長春路57號11樓', '0936678103', '2004-07-02', 'female', '/img/A0097.jpg'),
(98, '劉勛耿', 'Xhf8eMNp', 'jose5150@yahoo.com', '高雄市甲仙區關東巷42號', '0986673699', '1965-02-21', 'male', '/img/A0098.jpg'),
(99, '楊振遠', 'w6J2eB9F', 'robinson435@hotmail.com', '臺中市梧棲區文化路2段5號11樓', '0968130883', '2013-11-14', 'male', '/img/A0099.jpg'),
(100, '王熙舟', '5AG7zQH9', 'benjamin7241@gmail.com', '臺中市后里區廠舍莊二弄43號', '0963746156', '2019-12-21', 'female', '/img/A0100.jpg'),
(101, '張正爾', '437Rn274', 'dinwiddie8660@gmail.com', '臺中市北屯區水湳路55號', '0935754903', '1965-05-15', 'male', '/img/A0101.jpg'),
(102, '施玉翰', '887X4gdn', 'simmons8879@gmail.com', '宜蘭縣宜蘭市新民路大東巷8號', '0915728502', '2007-02-04', 'male', '/img/A0102.jpg'),
(103, '巫燕莘', 'k3wzZ6WH', 'nolan8929@outlook.com', '雲林縣北港鎮民權路43號之16', '0954617564', '2012-08-26', 'female', '/img/A0103.jpg'),
(104, '蔡懷海', '5z6xn3ua', 'ross2463@gmail.com', '嘉義縣番路鄉永興77號', '0989284328', '2006-07-26', 'male', '/img/A0104.jpg'),
(105, '劉宥帆', 'NE8P6FSF', 'flores3104@hotmail.com', '桃園市大園區中興街70號', '0963887624', '1968-08-31', 'female', '/img/A0105.jpg'),
(106, '董彥知', '95BeA72n', 'chet7293@icloud.com', '新竹市東區新源街36號6樓', '0958077772', '1978-12-15', 'female', '/img/A0106.jpg'),
(107, '龔忠拓', 'G6b7VhJ5', 'gaddis8565@gmail.com', '彰化縣溪州鄉瓦厝村永安路17號4樓', '0971477075', '1974-07-03', 'male', '/img/A0107.jpg'),
(108, '黃博睿', '8BdTt66x', 'barrow6127@yahoo.com', '南投縣南投市同源路十街34號之14', '0939908173', '1977-05-17', 'female', '/img/A0108.jpg'),
(109, '李悦禎', 'WU3v5n6u', 'jesse321@gmail.com', '臺中市南屯區惠心街7號', '0912846639', '1961-09-19', 'female', '/img/A0109.jpg'),
(110, '陳梓舒', 'vFc5cvf2', 'liya4230@yahoo.com', '高雄市茄萣區大德路41號', '0968992737', '1995-04-01', 'male', '/img/A0110.jpg'),
(111, '洪英軒', 'cC375t37', 'diana1525@hotmail.com', '苗栗縣頭份市德義路25號', '0937990198', '1995-06-24', 'male', '/img/A0111.jpg'),
(112, '潘南藴', 'W689C4eE', 'carson9037@gmail.com', '彰化縣二林鎮太平路１段86號之11', '0960427854', '1966-04-03', 'male', '/img/A0112.jpg'),
(113, '韓材理', 'KST2vY6m', 'rodriguez9351@gmail.com', '臺北市萬華區東園街24號4樓之10', '0918137997', '1983-06-04', 'female', '/img/A0113.jpg'),
(114, '吳年爍', 'CEam2WKy', 'kyle8957@yahoo.com', '臺北市中山區建國北路2段94號11樓', '0936951070', '2004-09-27', 'female', '/img/A0114.jpg'),
(115, '黃昱霜', 'R4SGdX99', 'gina1996@yahoo.com', '桃園市八德區大車路91號', '0968823393', '1973-09-27', 'male', '/img/A0115.jpg'),
(116, '廖以千', 'tQ5G2gSy', 'izabella1977@gmail.com', '臺北市文山區景福街92號', '0911362950', '1997-04-05', 'male', '/img/A0116.jpg'),
(117, '張喧瑾', 'QN2k22aT', 'eric8770@gmail.com', '臺中市大雅區雅潭路３段8號', '0961486624', '1965-12-22', 'female', '/img/A0117.jpg'),
(118, '巫千瑾', 'QeDwGtK7', 'carlisle5485@gmail.com', '桃園市新屋區快速路６段2號之7', '0987944281', '1977-04-27', 'female', '/img/A0118.jpg'),
(119, '謝彰樹', '2449P4yq', 'alvarez5200@icloud.com', '臺北市內湖區成功路４段87號2樓', '0920385727', '2016-06-03', 'female', '/img/A0119.jpg'),
(120, '張璧翊', 'adYup265', 'brody6328@gmail.com', '新北市五股區御史路27號', '0982887438', '2002-01-24', 'male', '/img/A0120.jpg'),
(121, '郭召水', '6BZ6Xw5S', 'thompson1999@gmail.com', '臺中市大甲區順帆路55號6樓', '0935136587', '1991-01-07', 'female', '/img/A0121.jpg'),
(122, '何乾坤', 'A796WeWV', 'elizabeth2269@gmail.com', '高雄市鼓山區華泰路20號', '0913664925', '2016-11-27', 'male', '/img/A0122.jpg'),
(123, '簡恩洪', 'W58775Gc', 'pitcher7692@gmail.com', '桃園市桃園區宏昌九街68號11樓', '0986972536', '1985-10-09', 'male', '/img/A0123.jpg'),
(124, '林劉鑫', 'q43xrHL4', 'torres6351@gmail.com', '臺中市北屯區崇仁街6號之8', '0934890948', '1994-01-05', 'male', '/img/A0124.jpg'),
(125, '劉敏旻', 'CnQ469Bp', 'donald354@gmail.com', '臺中市南區民興街71號之15', '0914674523', '2015-08-26', 'male', '/img/A0125.jpg'),
(126, '周彥朋', '8mm4pUxw', 'merrick9264@yahoo.com', '屏東縣屏東市菸廠東巷46號', '0987495405', '1993-03-11', 'female', '/img/A0126.jpg'),
(127, '馬品春', '3mfa98wd', 'jeffrey1768@gmail.com', '高雄市三民區鼎山街92號', '0921715660', '1976-09-22', 'male', '/img/A0127.jpg'),
(128, '傅瀾益', '2D32NCLM', 'sierra9919@gmail.com', '花蓮縣玉里鎮中華路65號', '0960082834', '2007-04-27', 'male', '/img/A0128.jpg'),
(129, '陳歡瑛', '2a26AyB9', 'guerrero1748@gmail.com', '苗栗縣竹南鎮復興路48號', '0920079870', '1976-04-12', 'male', '/img/A0129.jpg'),
(130, '莊淇磊', '89d5m6X7', 'jimmy7000@icloud.com', '臺中市龍井區中沙路85號7樓', '0955595945', '2013-10-04', 'male', '/img/A0130.jpg'),
(131, '宋維華', '983Y2GJE', 'hampden9198@gmail.com', '臺中市豐原區圳寮路8號', '0952476985', '1988-07-04', 'female', '/img/A0131.jpg'),
(132, '吳奕知', 'gAJxXt4h', 'bonnie7227@hotmail.com', '新北市鶯歌區成功街32號', '0919762583', '1999-09-22', 'male', '/img/A0132.jpg'),
(133, '程真維', 'x84Pq5FH', 'paul9990@hotmail.com', '花蓮縣吉安鄉光城路14號', '0956364898', '1969-06-24', 'female', '/img/A0133.jpg'),
(134, '傅敏越', 'y35pFNN6', 'witton6008@gmail.com', '桃園市桃園區新埔十街2號7樓之18', '0910463808', '2003-11-02', 'male', '/img/A0134.jpg'),
(135, '吳磊雄', 'nm9D62m7', 'gerson5801@hotmail.com', '南投縣竹山鎮集山路３段59號', '0982393474', '1971-02-05', 'male', '/img/A0135.jpg'),
(136, '黃堯祟', '2xDE63GZ', 'sinatra3291@outlook.com', '高雄市前鎮區鎮北三巷70號8樓', '0929200693', '1969-10-26', 'male', '/img/A0136.jpg'),
(137, '白懿郁', '56D9e34a', 'nicholas4723@gmail.com', '臺南市東區仁和路3號之15', '0921982547', '1963-05-31', 'female', '/img/A0137.jpg'),
(138, '巫秋綺', 'h4yBbN74', 'teddy3307@outlook.com', '屏東縣長治鄉繁榮街63號之20', '0956333873', '2018-08-18', 'male', '/img/A0138.jpg'),
(139, '吳可微', '5n4E2VwM', 'cameron708@gmail.com', '彰化縣竹塘鄉竹林路１段18號6樓', '0958878960', '1970-05-29', 'male', '/img/A0139.jpg'),
(140, '楊名秉', 'wVFx8b5p', 'bledel3228@gmail.com', '臺北市萬華區桂林路100號', '0933161096', '1970-12-02', 'female', '/img/A0140.jpg'),
(141, '楊可喧', '9ghUv77e', 'mckenzie7979@gmail.com', '宜蘭縣蘇澳鎮德興八路76號7樓', '0987239351', '2016-09-03', 'male', '/img/A0141.jpg'),
(142, '楊任明', '5F8eVV9C', 'melanie4843@outlook.com', '臺北市萬華區昆明街16號11樓之18', '0989388971', '2005-06-11', 'male', '/img/A0142.jpg'),
(143, '馬孝真', 'm496DZBZ', 'greg1801@gmail.com', '屏東縣恆春鎮興北路興東巷96號之20', '0971171826', '2013-02-20', 'male', '/img/A0143.jpg'),
(144, '林彌穎', 'Ep9D56dG', 'peretti2165@gmail.com', '苗栗縣頭份市尖豐路19號之4', '0934872315', '1990-05-31', 'female', '/img/A0144.jpg'),
(145, '張煥鳳', 'e7Y65456', 'jimenez3523@gmail.com', '新北市三峽區仁愛街92號10樓', '0935181873', '1999-09-08', 'female', '/img/A0145.jpg'),
(146, '林苑鑫', '49vW7trZ', 'tiana7595@gmail.com', '新竹縣竹東鎮杞林路1號12樓', '0925677723', '1973-06-09', 'male', '/img/A0146.jpg'),
(147, '翁俞琛', '3zpZd6T5', 'orrico1254@gmail.com', '高雄市鳳山區國慶二街8號之11', '0924353130', '1971-10-23', 'male', '/img/A0147.jpg'),
(148, '郭培沐', 'Mpt286Bu', 'johnny6246@gmail.com', '新北市板橋區萬板路98號8樓', '0914135683', '1972-12-12', 'female', '/img/A0148.jpg'),
(149, '彭均雅', 'n9bNy2CS', 'jeffries8050@yahoo.com', '屏東縣東港鎮興中南五街11號', '0911021200', '2009-02-08', 'female', '/img/A0149.jpg'),
(150, '簡捷汝', 'u8b3q9y7', 'seth9779@gmail.com', '臺中市大里區達明路28號6樓', '0939405374', '1985-10-01', 'male', '/img/A0150.jpg'),
(151, '許函曉', 'A3464QEH', 'vivian8228@hotmail.com', '臺中市西屯區安和路11號2樓', '0961725699', '1961-10-07', 'female', '/img/A0151.jpg'),
(152, '程秉驥', '23e99q26', 'cynthia5300@gmail.com', '高雄市左營區曾子路36號', '0926521254', '1982-12-22', 'male', '/img/A0152.jpg'),
(153, '李南智', '37p22Pnb', 'paula3500@yahoo.com', '桃園市平鎮區貿一路69號之7', '0963534685', '1979-02-14', 'male', '/img/A0153.jpg'),
(154, '洪婧宥', 'xKfECgtH', 'mantle3172@gmail.com', '臺北市士林區中山北路６段36號', '0935246950', '1993-12-11', 'female', '/img/A0154.jpg'),
(155, '湯棠然', '22K7fX5a', 'martinez5918@yahoo.com', '嘉義市西區仁愛路8號4樓', '0926340376', '1965-02-23', 'female', '/img/A0155.jpg'),
(156, '邱少諄', 'z7fT394a', 'collins225@outlook.com', '新北市中和區橋安街34號9樓', '0911320015', '1968-07-11', 'male', '/img/A0156.jpg'),
(157, '楊洋美', 'e3NWvaT5', 'bella5793@icloud.com', '基隆市信義區東美二街92號', '0917573389', '1994-04-22', 'male', '/img/A0157.jpg'),
(158, '鐘伯謹', 'Mwc84P53', 'sean5454@gmail.com', '臺中市潭子區得才街96號10樓', '0988776641', '1964-06-12', 'male', '/img/A0158.jpg'),
(159, '張全盧', '594kk87D', 'bates1896@icloud.com', '雲林縣斗六市科班路15號', '0955057572', '1974-02-09', 'female', '/img/A0159.jpg'),
(160, '楊聖霖', 'E35uHUPT', 'middleton2169@gmail.com', '高雄市林園區王公一路51號', '0918930961', '1979-02-03', 'female', '/img/A0160.jpg'),
(161, '蔡雯霞', 'T36q8J77', 'anderson6524@gmail.com', '新竹縣峨眉鄉大同街73號9樓之18', '0918462993', '1998-09-09', 'male', '/img/A0161.jpg'),
(162, '蕭彥露', 'f7r9frM8', 'carlisle1872@gmail.com', '臺北市中正區紹興南街70號', '0933420298', '1966-02-22', 'male', '/img/A0162.jpg'),
(163, '王竹艾', 'G8e428pb', 'michaels5523@gmail.com', '彰化縣永靖鄉圳腳巷72號', '0926670696', '1974-06-23', 'male', '/img/A0163.jpg'),
(164, '李業騏', 'c56DJ3zW', 'mikaela7155@gmail.com', '臺中市南屯區大墩路14號4樓', '0916692433', '1986-03-02', 'female', '/img/A0164.jpg'),
(165, '李召媛', '92U59X48', 'chavez502@outlook.com', '桃園市中壢區普仁新村93號之6', '0916140780', '1996-07-08', 'male', '/img/A0165.jpg'),
(166, '馮力媛', '59bvLQ5U', 'surname9433@gmail.com', '桃園市中壢區民族路５段54號6樓之1', '0963250603', '2017-02-02', 'male', '/img/A0166.jpg'),
(167, '劉睿葉', '6R7LvH4F', 'haskell132@yahoo.com', '臺中市南屯區永春北路56號', '0953977345', '2002-08-15', 'male', '/img/A0167.jpg'),
(168, '戴哲展', 'EL6Hp4M8', 'corey753@outlook.com', '新北市中和區中板路37號6樓', '0929704928', '1978-10-17', 'male', '/img/A0168.jpg'),
(169, '陳哲玉', 'xPhQZAD5', 'charles5296@gmail.com', '高雄市茄萣區港口路46號11樓之1', '0912956586', '2015-06-05', 'female', '/img/A0169.jpg'),
(170, '邱子豪', 'p3C9dKQ9', 'anderson7810@icloud.com', '臺南市關廟區旺萊路80號', '0982170722', '1961-12-11', 'male', '/img/A0170.jpg'),
(171, '羅晟顏', '828CsMM3', 'lester9952@gmail.com', '臺北市大安區金華街35號', '0937856509', '2018-03-13', 'female', '/img/A0171.jpg'),
(172, '楊輝道', 'tF64Zh3n', 'ross2995@outlook.com', '臺南市佳里區平等街31號', '0961000890', '2011-06-18', 'male', '/img/A0172.jpg'),
(173, '劉帆瑞', '84pcgG2m', 'beardsley4701@gmail.com', '臺東縣關山鎮和平路42號11樓', '0982485939', '1969-08-02', 'female', '/img/A0173.jpg'),
(174, '賴菁豔', '5a6MaxQx', 'scott9033@gmail.com', '新北市淡水區石頭埔99號', '0955894312', '2000-02-10', 'female', '/img/A0174.jpg'),
(175, '姚泓漢', '7A67Z5nL', 'frank4602@yahoo.com', '臺北市士林區仰德大道３段45號之3', '0912682762', '1999-04-22', 'female', '/img/A0175.jpg'),
(176, '蔡千遠', 'Lcr8htHR', 'cockburn5725@gmail.com', '桃園市蘆竹區五福路27號', '0918109297', '1963-04-09', 'female', '/img/A0176.jpg'),
(177, '黃奇許', 'PMB8NCzZ', 'clark3425@hotmail.com', '高雄市林園區半路96號12樓', '0928090212', '2015-02-21', 'female', '/img/A0177.jpg'),
(178, '徐喧肇', '6Y398yr6', 'vives4263@gmail.com', '新北市板橋區英士路56號8樓之14', '0927804311', '2003-10-05', 'male', '/img/A0178.jpg'),
(179, '吳元温', '93cAH642', 'carter4194@gmail.com', '屏東縣新埤鄉南松路42號10樓', '0987576042', '1960-09-06', 'male', '/img/A0179.jpg'),
(180, '黃冠雲', '467QDJs6', 'nicole1594@hotmail.com', '高雄市苓雅區大順三路86號之8', '0916928421', '1975-08-26', 'male', '/img/A0180.jpg'),
(181, '游宥月', 'n52gQp75', 'connie1710@hotmail.com', '南投縣埔里鎮東榮路82號', '0971738423', '1972-05-20', 'male', '/img/A0181.jpg'),
(182, '李彥瑾', 'xub6yp43', 'seth6519@gmail.com', '臺中市北屯區大富路40號', '0911651890', '1967-09-27', 'male', '/img/A0182.jpg'),
(183, '游妍晴', 'g277ExPb', 'doohan4759@yahoo.com', '臺南市楠西區密枝98號', '0956608341', '1976-12-23', 'female', '/img/A0183.jpg'),
(184, '錢永立', '87DLGSG5', 'daisy7110@outlook.com', '臺中市西屯區惠來路１段79號', '0923600002', '2019-04-15', 'female', '/img/A0184.jpg'),
(185, '石楷韶', 'T4RC2KaF', 'dwight1619@gmail.com', '桃園市蘆竹區海山路１段4號', '0924517066', '1988-11-01', 'female', '/img/A0185.jpg'),
(186, '阮喧寧', 'cUu9XJ7q', 'foster2461@icloud.com', '臺中市西區精誠十街38號', '0961653337', '1985-08-08', 'male', '/img/A0186.jpg'),
(187, '蘇影承', 'DGv9J8y8', 'connor589@icloud.com', '新北市金山區中信南路98號', '0958018321', '1965-07-11', 'female', '/img/A0187.jpg'),
(188, '許奇煒', 'GuyBnFmV', 'keaton5027@hotmail.com', '雲林縣斗南鎮順安街90號', '0936687638', '2013-08-20', 'female', '/img/A0188.jpg'),
(189, '湯暢燦', '7fQTaB33', 'nguyen643@hotmail.com', '臺北市士林區大南路16號', '0924689344', '2007-05-10', 'female', '/img/A0189.jpg'),
(190, '侯宥晏', 'Fyw5s835', 'lewis1738@gmail.com', '臺南市永康區大安街71號', '0972196296', '2018-12-28', 'male', '/img/A0190.jpg'),
(191, '邵如藍', 'GZ696amf', 'lily9975@gmail.com', '臺南市善化區保安街45號', '0916003247', '2004-01-31', 'female', '/img/A0191.jpg'),
(192, '吳偉政', 'zv7tb879', 'jackson573@gmail.com', '新竹縣竹東鎮仁愛路39號5樓', '0922993487', '2018-02-01', 'male', '/img/A0192.jpg'),
(193, '柯易霄', 'vf3kJQ7z', 'swift8377@gmail.com', '屏東縣萬巒鄉永安路56號', '0919833785', '1976-08-01', 'female', '/img/A0193.jpg'),
(194, '王濱風', '8L3fqB2P', 'kenneth1889@outlook.com', '彰化縣社頭鄉新生巷東一弄80號', '0920909956', '2018-10-13', 'female', '/img/A0194.jpg'),
(195, '張林藝', 'XCLP3973', 'amy3687@yahoo.com', '高雄市三民區十全二路72號', '0933066760', '1993-02-26', 'male', '/img/A0195.jpg'),
(196, '黃冠靖', 'P6H9szFG', 'penny1672@hotmail.com', '桃園市觀音區保生六路51號之20', '0954050546', '2014-01-01', 'female', '/img/A0196.jpg'),
(197, '張嬡芪', 'svM29Uk9', 'rodriguez9266@gmail.com', '屏東縣屏東市民學路10號', '0956541340', '2015-01-10', 'female', '/img/A0197.jpg'),
(198, '吳亞力', '336Qp84B', 'garland8766@yahoo.com', '新北市板橋區大仁街61號11樓', '0939678251', '1990-11-07', 'male', '/img/A0198.jpg'),
(199, '姜晉玲', '26gBpaZG', 'roger7245@gmail.com', '嘉義市西區興通路35號8樓', '0932136814', '1975-12-04', 'female', '/img/A0199.jpg'),
(200, '黃嬈春', '4zPz542T', 'amelia4399@outlook.com', '臺中市大雅區雅潭路３段1號9樓', '0925080304', '2006-12-09', 'female', '/img/A0200.jpg'),
(201, '謝依潞', '68WJ9W8k', 'ruth2012@outlook.com', '雲林縣斗六市興農路61號7樓', '0989591014', '2013-09-03', 'female', '/img/A0201.jpg'),
(202, '邱之琦', 'KErY7JZv', 'christy9735@gmail.com', '金門縣金城鎮莒光路54號', '0933435180', '1969-09-21', 'male', '/img/A0202.jpg'),
(203, '洪祟諺', '4bkNWbPJ', 'jillian6328@yahoo.com', '桃園市中壢區義民路１段33號', '0910589598', '1964-06-11', 'female', '/img/A0203.jpg'),
(204, '陳寶逸', 'hD2693P5', 'gregory7755@yahoo.com', '新北市三芝區芝麻五街4號', '0968917910', '1992-06-05', 'female', '/img/A0204.jpg'),
(205, '林港睿', 'fS2R5E58', 'hart984@gmail.com', '高雄市鳳山區文昌街29號', '0970610206', '1975-09-08', 'male', '/img/A0205.jpg'),
(206, '何堇夫', '8vS3P9uQ', 'pamela3950@gmail.com', '臺南市安南區環館二路21號之5', '0923267629', '1981-09-15', 'male', '/img/A0206.jpg'),
(207, '陳暉諺', 'J8n7Emu6', 'franco5460@gmail.com', '苗栗縣苗栗市南光55號之7', '0989927958', '1996-01-31', 'male', '/img/A0207.jpg'),
(208, '簡羣語', 'RMQa7p27', 'briggs778@outlook.com', '臺中市東區東英路26號', '0955267865', '2003-01-21', 'male', '/img/A0208.jpg'),
(209, '莊思龍', '76q4x4e9', 'julie8704@gmail.com', '臺中市烏日區溪南路１段73號', '0921739739', '1972-08-10', 'female', '/img/A0209.jpg'),
(210, '李勛彤', 'Hs9dAup4', 'roy8390@outlook.com', '雲林縣土庫鎮成功路67號之3', '0970276275', '2000-06-01', 'male', '/img/A0210.jpg'),
(211, '詹折蓁', 'Z9488BMm', 'garrix803@gmail.com', '臺北市中山區松江路26號', '0939267803', '1980-01-17', 'male', '/img/A0211.jpg'),
(212, '田鑫齊', '2XF34C5d', 'roy6971@gmail.com', '高雄市前鎮區台鋁八巷67號之15', '0968428713', '1970-02-05', 'female', '/img/A0212.jpg'),
(213, '黃子琦', 'N787W4XA', 'mullally7818@outlook.com', '新竹縣寶山鄉雙豐路29號', '0960809983', '1983-04-09', 'female', '/img/A0213.jpg'),
(214, '林吉飛', '7K49rzSA', 'marilyn1128@outlook.com', '高雄市仁武區八德南路70號2樓', '0952175836', '2008-08-03', 'female', '/img/A0214.jpg'),
(215, '唐偉遙', '567KVE85', 'phillips6402@yahoo.com', '屏東縣泰武鄉潭北巷87號12樓', '0938546085', '1999-02-08', 'male', '/img/A0215.jpg'),
(216, '黃潤福', 's76TB7ZN', 'shayla4721@hotmail.com', '新北市汐止區忠孝東路35號', '0988081570', '1982-11-24', 'female', '/img/A0216.jpg'),
(217, '陳冠超', '3mDV6Xmr', 'evan8206@gmail.com', '桃園市大園區中山北路29號', '0963125809', '2014-07-08', 'male', '/img/A0217.jpg'),
(218, '鍾克汝', 'zeU3W6WM', 'nadia5581@hotmail.com', '高雄市鳳山區復華一街84號', '0935567947', '1969-11-11', 'male', '/img/A0218.jpg'),
(219, '郭瀾禹', 'aY9E375J', 'kaylee8547@outlook.com', '高雄市橋頭區成功南路青埔66號', '0955147990', '2019-05-05', 'female', '/img/A0219.jpg'),
(220, '涂儀梓', 'pr9u2eyz', 'kieran8406@gmail.com', '嘉義縣大林鎮忠孝路88號之12', '0925476648', '1980-03-02', 'male', '/img/A0220.jpg'),
(221, '黃宇飛', '87hcGRhD', 'austin7209@gmail.com', '嘉義市東區世賢路４段20號7樓', '0913681451', '1989-09-14', 'female', '/img/A0221.jpg'),
(222, '歐中芝', '844xw244', 'lizzie3479@gmail.com', '彰化縣秀水鄉竹圍巷11號9樓', '0987783175', '1991-09-05', 'female', '/img/A0222.jpg'),
(223, '林家鑫', '8r6J28dk', 'mckenzie2393@hotmail.com', '基隆市仁愛區仁五路18號', '0923178855', '1969-01-14', 'female', '/img/A0223.jpg'),
(224, '汪謹銘', 'z7pWSM22', 'edward3920@hotmail.com', '臺中市太平區太平路93號', '0919465761', '2003-07-29', 'male', '/img/A0224.jpg'),
(225, '曾晶芷', '9Y9T5e9u', 'harold3396@gmail.com', '屏東縣麟洛鄉中山路國中巷39號', '0935429386', '1999-01-20', 'female', '/img/A0225.jpg'),
(226, '陳肇韋', 'gfNWE2f9', 'morris5450@gmail.com', '屏東縣屏東市崇德一路40號', '0918787579', '1993-05-08', 'female', '/img/A0226.jpg'),
(227, '王筱雲', '9XE7kv69', 'jaime2608@gmail.com', '新北市新店區安業街74號', '0989558336', '2011-04-22', 'female', '/img/A0227.jpg'),
(228, '金業榮', 'Bs2rv89H', 'dinwiddie2505@yahoo.com', '新竹縣竹北市聯發街38號', '0986882718', '2020-03-26', 'female', '/img/A0228.jpg'),
(229, '方明雪', '2U4KU7Eu', 'smith2455@gmail.com', '花蓮縣花蓮市精美路54號3樓', '0933466439', '1964-01-09', 'female', '/img/A0229.jpg'),
(230, '孫源莎', 'GhHMKuBx', 'alexis3604@outlook.com', '花蓮縣吉安鄉慈惠三街13號之15', '0923403764', '1986-01-16', 'female', '/img/A0230.jpg'),
(231, '王乾勝', '9T34Hf6g', 'andrew814@gmail.com', '桃園市平鎮區德育路2段67號8樓', '0912379934', '1968-04-25', 'female', '/img/A0231.jpg'),
(232, '鄧聖靖', 'Jb6ysPB4', 'arnold1427@gmail.com', '屏東縣萬巒鄉三多路3號', '0916675253', '2004-01-24', 'male', '/img/A0232.jpg'),
(233, '許昕琪', 'Ma7Qgf43', 'madeline9049@gmail.com', '臺南市安平區光州六街69號', '0935950049', '1966-08-14', 'female', '/img/A0233.jpg'),
(234, '曹和爾', '6MLkW5GA', 'kenneth1597@gmail.com', '高雄市楠梓區宏毅二路南二巷70號8樓之6', '0922671018', '1976-05-18', 'male', '/img/A0234.jpg'),
(235, '古冉珍', 'c58S9v8X', 'justin7758@hotmail.com', '彰化縣二林鎮太平路2段82號', '0919015806', '2003-04-12', 'female', '/img/A0235.jpg'),
(236, '錢梓汶', 'Y433JE4b', 'sophie5684@outlook.com', '高雄市鼓山區美術南六街47號', '0916472195', '2011-09-20', 'male', '/img/A0236.jpg'),
(237, '余水衞', '7wKU57v7', 'liam8952@hotmail.com', '臺北市中山區林森北路9號', '0921087044', '2014-06-11', 'male', '/img/A0237.jpg'),
(238, '蔡玟瓊', 'rv6aUr42', 'sotomayor5120@yahoo.com', '桃園市中壢區龍岡路３段72號', '0927050677', '1996-12-29', 'male', '/img/A0238.jpg'),
(239, '尤珺辰', 'vS37kaVt', 'erin4443@outlook.com', '彰化縣北斗鎮光仁街36號12樓之13', '0934800398', '1968-08-11', 'female', '/img/A0239.jpg'),
(240, '黃慶璟', '77baWQBJ', 'schuyler2403@gmail.com', '臺中市豐原區豐勢路１段14號', '0932601964', '1971-12-22', 'female', '/img/A0240.jpg'),
(241, '吳業鋒', 'GbYuyA9W', 'richardson7815@gmail.com', '苗栗縣頭份市和平37號', '0988746843', '2020-12-13', 'female', '/img/A0241.jpg'),
(242, '袁也蒨', 'YsQq424a', 'sophie5246@gmail.com', '臺北市大同區延平北路2段52號10樓', '0926207555', '1981-11-05', 'male', '/img/A0242.jpg'),
(243, '李郜霆', 'RXh982Rm', 'aaron5409@gmail.com', '高雄市鳳山區維新路5號3樓', '0953039092', '1968-02-12', 'male', '/img/A0243.jpg'),
(244, '張俊利', '3965k5kV', 'kaylynn272@gmail.com', '高雄市鳳山區中山東路41號', '0921383560', '1978-01-11', 'male', '/img/A0244.jpg'),
(245, '邱琪鑫', '52H9t7ca', 'kiley5605@gmail.com', '新竹縣竹東鎮長春路３段37號之10', '0929465835', '1991-06-27', 'female', '/img/A0245.jpg'),
(246, '曾和鬆', 'Wa924c28', 'jackson6183@hotmail.com', '臺北市中山區北安路32號之13', '0937121402', '1971-10-09', 'female', '/img/A0246.jpg'),
(247, '黃樂陽', 'HTfv2nAN', 'hall2119@gmail.com', '臺中市南屯區新富五街19號', '0971311591', '1960-09-07', 'male', '/img/A0247.jpg'),
(248, '曹凰逞', 'Wcs9X46Z', 'lilly3291@gmail.com', '苗栗縣造橋鄉雙合窩11號', '0952071075', '1995-07-03', 'female', '/img/A0248.jpg'),
(249, '黃新真', 'w756f83h', 'gaddis8959@icloud.com', '彰化縣田尾鄉中山路１段51號', '0988563026', '1981-08-05', 'female', '/img/A0249.jpg'),
(250, '黃浩瑋', 'E36qYH3k', 'wood4227@yahoo.com', '臺中市大甲區福東路49號4樓', '0952247187', '1986-09-19', 'male', '/img/A0250.jpg'),
(251, '林碧莎', 'qt3v4RMX', 'pablo6949@gmail.com', '臺北市內湖區金湖路91號', '0926687206', '1971-12-07', 'male', '/img/A0251.jpg'),
(252, '葉川懋', '7934x4N6', 'benton2566@icloud.com', '臺北市大安區溫州街45號', '0939524610', '1985-04-04', 'female', '/img/A0252.jpg'),
(253, '黃聰鷺', '854qf962', 'leslie6862@outlook.com', '高雄市前金區五福三路32號9樓之10', '0988713867', '1964-03-14', 'male', '/img/A0253.jpg'),
(254, '簡彰瑾', 'nAn63c35', 'mark2467@icloud.com', '高雄市鼓山區篤敬路29號之15', '0935762236', '1979-04-09', 'male', '/img/A0254.jpg'),
(255, '汪毓瓊', 'E9q9qxzT', 'anderson7442@yahoo.com', '高雄市旗津區通山路96號之8', '0939432551', '1979-04-25', 'female', '/img/A0255.jpg'),
(256, '黃旭秉', 'pZxy4z52', 'nicole111@outlook.com', '臺中市北屯區后庄路86號', '0939187128', '1990-03-24', 'female', '/img/A0256.jpg'),
(257, '洪成靖', 'Y998484v', 'gina7975@icloud.com', '臺中市西屯區中清路2段22號', '0913454896', '2018-08-17', 'male', '/img/A0257.jpg'),
(258, '羅世淇', '7fuL6dW2', 'mikaela1447@gmail.com', '南投縣竹山鎮埔頭街49號8樓', '0968170245', '2008-08-23', 'female', '/img/A0258.jpg'),
(259, '劉添語', '29EaN6P4', 'young2749@hotmail.com', '臺中市沙鹿區南陽路4號', '0986267730', '1981-02-17', 'female', '/img/A0259.jpg'),
(260, '盧平洢', '435sAJ88', 'alvin5958@outlook.com', '新北市土城區延壽路82號之3', '0938317903', '1995-07-28', 'male', '/img/A0260.jpg'),
(261, '林潮鑫', 'Fxkuwq29', 'perez4136@gmail.com', '桃園市龜山區下湖88號', '0911214314', '2020-12-14', 'male', '/img/A0261.jpg'),
(262, '鄭峯森', '3335Sb4h', 'gregory7013@gmail.com', '南投縣草屯鎮儒林街87號', '0910199509', '1961-07-20', 'male', '/img/A0262.jpg'),
(263, '謝晨靄', 'dh4xH93G', 'joseph1687@gmail.com', '苗栗縣通霄鎮福興3號之15', '0931994922', '1973-07-26', 'female', '/img/A0263.jpg'),
(264, '余善鑫', 'RPQ9yHPw', 'freud1471@gmail.com', '臺中市西屯區天水東一街34號之20', '0914635891', '1984-10-30', 'female', '/img/A0264.jpg'),
(265, '謝俠運', '7saF2JCC', 'clive196@yahoo.com', '南投縣南投市三和二路46號5樓', '0932971823', '2005-09-22', 'male', '/img/A0265.jpg'),
(266, '陳凰祉', 'KzBqtz5g', 'brooke6330@gmail.com', '臺中市豐原區東陽路豪傑二巷30號', '0922033823', '1992-01-01', 'female', '/img/A0266.jpg'),
(267, '詹奇苑', '96WV78w6', 'flores9472@icloud.com', '高雄市旗山區三民巷52號9樓之11', '0963527094', '1968-03-15', 'male', '/img/A0267.jpg'),
(268, '廖良越', '6p32P9dA', 'young6975@gmail.com', '花蓮縣光復鄉建國路57號12樓之10', '0930205551', '2001-12-08', 'female', '/img/A0268.jpg'),
(269, '劉凰流', 'hf6FCXng', 'ortiz6162@icloud.com', '屏東縣琉球鄉杉板路11號', '0928897591', '1967-02-19', 'female', '/img/A0269.jpg'),
(270, '劉奕梓', '8MY2p2mu', 'dana2753@gmail.com', '臺北市文山區景福街22號8樓', '0930438863', '1986-09-14', 'female', '/img/A0270.jpg'),
(271, '曾功景', '9wSxdu8r', 'kenny7565@gmail.com', '花蓮縣新城鄉新興二街31號之7', '0919684145', '2012-08-15', 'male', '/img/A0271.jpg'),
(272, '薛志術', '6Gf6237c', 'edwards5662@hotmail.com', '臺南市佳里區後庄44號之1', '0939937392', '1997-12-13', 'male', '/img/A0272.jpg'),
(273, '沈千萍', 'frD7GKYy', 'collins9816@gmail.com', '高雄市楠梓區宏毅二路北一巷14號10樓', '0917669445', '1995-01-11', 'female', '/img/A0273.jpg'),
(274, '謝昀黛', '7ZBXtRbw', 'hannah6197@gmail.com', '臺中市清水區光復街46號', '0954071060', '2002-01-22', 'male', '/img/A0274.jpg'),
(275, '程芬金', '54q639bP', 'stella4946@hotmail.com', '宜蘭縣羅東鎮竹義路11號10樓', '0912985295', '1992-04-11', 'female', '/img/A0275.jpg'),
(276, '白也鈺', 'HRA5U5Fs', 'gregory4979@gmail.com', '桃園市八德區豐德二路64號之20', '0917528361', '1997-09-05', 'female', '/img/A0276.jpg'),
(277, '蔣力爾', '4978S26f', 'travis8623@gmail.com', '高雄市仁武區仁心路博愛巷39號5樓之8', '0963356390', '1963-01-30', 'female', '/img/A0277.jpg'),
(278, '許眉靜', 'E8Z64MML', 'dorothy9812@hotmail.com', '雲林縣東勢鄉所前街25號11樓之13', '0988996700', '2019-03-31', 'male', '/img/A0278.jpg'),
(279, '龔一妤', 'vJZS7Se8', 'jeffrey318@gmail.com', '新竹縣竹北市界址69號', '0971605249', '1971-01-17', 'female', '/img/A0279.jpg'),
(280, '姜勁泓', '7W24YS68', 'allen1960@hotmail.com', '臺北市中正區公園路3號', '0930763734', '1987-05-08', 'female', '/img/A0280.jpg'),
(281, '王智連', '7W8p5c5d', 'margaret3020@gmail.com', '新竹市東區興業二路47號5樓', '0918953392', '2015-08-06', 'female', '/img/A0281.jpg'),
(282, '王淳聖', 'zKU3UF28', 'maddux7210@gmail.com', '臺中市南區平順街13號之2', '0911085896', '2018-09-12', 'male', '/img/A0282.jpg'),
(283, '馬勝祉', 'L7Atr2U4', 'eddie3800@yahoo.com', '新北市新店區屈尺路77號之1', '0988283886', '1982-09-14', 'female', '/img/A0283.jpg'),
(284, '藍真艾', '4S3rHks6', 'smith3549@hotmail.com', '彰化縣員林市三潭巷86號', '0956423019', '2002-09-25', 'female', '/img/A0284.jpg'),
(285, '賴欽羣', 'k479398x', 'nguyen4568@gmail.com', '宜蘭縣礁溪鄉仁愛路40號', '0987331090', '1965-08-24', 'female', '/img/A0285.jpg'),
(286, '梁林衞', '24yJBH75', 'mckenzie9839@gmail.com', '新北市中和區光環路2段19號2樓之14', '0912644150', '1993-09-15', 'female', '/img/A0286.jpg'),
(287, '紀全嬌', '86vYuyB7', 'brown5269@hotmail.com', '雲林縣莿桐鄉東興41號10樓', '0932266737', '2000-11-13', 'male', '/img/A0287.jpg'),
(288, '林夢莎', 'SnMme5p2', 'shelley4869@gmail.com', '屏東縣崁頂鄉平和南路48號6樓', '0926961918', '2009-03-18', 'male', '/img/A0288.jpg'),
(289, '李記韻', 'Bu6mTK2y', 'aidan7902@outlook.com', '臺中市神岡區圳岸路49號', '0952662398', '1963-05-10', 'male', '/img/A0289.jpg'),
(290, '吳潮邦', 'emSLw8c3', 'jefferson6515@gmail.com', '臺北市中山區撫順街1號', '0917400794', '1967-11-16', 'female', '/img/A0290.jpg'),
(291, '林婷嫣', '3cR626n9', 'everett2711@gmail.com', '嘉義縣大林鎮三角40號', '0918150131', '2016-10-21', 'male', '/img/A0291.jpg'),
(292, '杜煒融', '4wNK2R46', 'banks2486@gmail.com', '高雄市橋頭區里林東路明德南巷49號3樓', '0968321470', '1989-10-06', 'male', '/img/A0292.jpg'),
(293, '魏熹苡', '49RCC4N4', 'green2346@gmail.com', '高雄市仁武區文學西街71號', '0989192049', '2017-12-18', 'female', '/img/A0293.jpg'),
(294, '陳眾韜', 'PKGL48aC', 'coombs1481@gmail.com', '屏東縣屏東市高豐街69號', '0953887650', '1974-04-19', 'female', '/img/A0294.jpg'),
(295, '蔡以儀', 'tZ8Q43vM', 'blake6585@gmail.com', '臺中市沙鹿區南陽路三角巷26號', '0937264412', '1966-01-15', 'male', '/img/A0295.jpg'),
(296, '魏妤甯', '9N96VQzv', 'mantle1170@hotmail.com', '彰化縣埤頭鄉埤周路11號10樓', '0916567621', '2017-04-27', 'female', '/img/A0296.jpg'),
(297, '鐘棋澍', 'sAhV6Ye9', 'trenton3050@gmail.com', '臺中市西屯區市政路43號', '0918815259', '2017-07-12', 'male', '/img/A0297.jpg'),
(298, '石卓嘉', 'sH7NL3ra', 'isabel3058@gmail.com', '臺南市新化區大智路67號12樓', '0931189600', '1984-01-11', 'female', '/img/A0298.jpg'),
(299, '余冉雁', 'mJcX4NMz', 'monique7415@gmail.com', '苗栗縣頭份市尚順路35號', '0917903635', '1977-12-05', 'male', '/img/A0299.jpg'),
(300, '洪萬雙', '2G6e756A', 'glenn9208@gmail.com', '臺南市永康區大橋一街5號之12', '0987170996', '1975-11-25', 'male', '/img/A0300.jpg'),
(301, '鐘宇霆', '7wmDq3g4', 'maddux4145@icloud.com', '桃園市桃園區保羅街32號6樓', '0938753226', '1995-07-01', 'female', '/img/A0301.jpg'),
(302, '卓業樸', 'YdQVHa6R', 'martinez9111@gmail.com', '桃園市蘆竹區南崁路2段73號7樓', '0953646446', '2007-04-14', 'female', '/img/A0302.jpg'),
(303, '江甯秋', '5NC8PrfG', 'hotz6849@yahoo.com', '新北市泰山區仁義路70號2樓', '0911905434', '2003-07-28', 'male', '/img/A0303.jpg'),
(304, '郭光川', 'C2qCWsBw', 'culver8151@icloud.com', '新北市汐止區招商街76號8樓', '0937228903', '2006-08-24', 'female', '/img/A0304.jpg'),
(305, '童嫻華', '6m658Ca7', 'swift2520@yahoo.com', '臺中市神岡區文化街16號6樓之17', '0910194930', '2006-03-05', 'female', '/img/A0305.jpg'),
(306, '蔡江融', 'P4J54pZK', 'margaret4557@gmail.com', '屏東縣萬丹鄉廣志街64號', '0955121322', '2006-09-19', 'female', '/img/A0306.jpg'),
(307, '張以鷺', 'k3545fw7', 'diane4292@yahoo.com', '臺中市西屯區福星北路70號', '0922600908', '2014-07-24', 'female', '/img/A0307.jpg'),
(308, '丁瑤蒨', '853rpFE3', 'gavin3637@hotmail.com', '宜蘭縣冬山鄉福興東路21號', '0939987300', '2020-05-18', 'male', '/img/A0308.jpg'),
(309, '程召妍', '8ar9495n', 'larry2169@hotmail.com', '桃園市新屋區赤牛欄40號', '0968565447', '2007-02-25', 'male', '/img/A0309.jpg'),
(310, '陳彥懷', 'xpY4f29K', 'britton3065@gmail.com', '高雄市鳳山區黃埔二村東四巷77號之1', '0988728893', '2017-04-30', 'female', '/img/A0310.jpg'),
(311, '李澍鋅', 'bg7D742Z', 'marie9157@gmail.com', '桃園市龜山區龍泉街44號6樓之20', '0913122061', '2015-12-01', 'male', '/img/A0311.jpg'),
(312, '湯肇靜', 'YDf9qg3u', 'james2117@gmail.com', '臺南市南區德興路22號', '0972000827', '1972-10-04', 'male', '/img/A0312.jpg'),
(313, '涂儀夕', 'EJax9yP8', 'sheldon1602@gmail.com', '臺南市麻豆區中華街83號9樓', '0912096243', '1994-02-18', 'female', '/img/A0313.jpg'),
(314, '邵依舒', '472sB55V', 'merritt392@gmail.com', '臺北市大安區臥龍街25號12樓之10', '0956599058', '1970-02-24', 'male', '/img/A0314.jpg'),
(315, '袁純露', '9p8247F9', 'hammer2179@outlook.com', '高雄市前鎮區黃埔街52號', '0926094595', '1965-12-14', 'female', '/img/A0315.jpg'),
(316, '劉澍逸', 'cAu692AH', 'brooks9656@gmail.com', '新竹縣湖口鄉長春路84號9樓', '0928969854', '1990-02-07', 'female', '/img/A0316.jpg'),
(317, '劉樺秀', '34u5N9T6', 'eliana1263@outlook.com', '彰化縣埔心鄉經口路30號', '0972197882', '1968-10-07', 'male', '/img/A0317.jpg'),
(318, '劉方瑄', '2As2Rb3x', 'izabella236@gmail.com', '彰化縣伸港鄉東全路84號11樓', '0922299112', '1987-05-24', 'female', '/img/A0318.jpg'),
(319, '黎晟陽', 'Bp944qe2', 'gaddis7591@outlook.com', '新北市三重區碧華街74號', '0921969475', '1992-05-03', 'female', '/img/A0319.jpg'),
(320, '張濤萬', 'HLR499CP', 'mulligan6418@gmail.com', '臺北市北投區關渡路28號', '0953672673', '2014-04-19', 'male', '/img/A0320.jpg'),
(321, '王慶穎', 'Py37546R', 'flores5394@yahoo.com', '嘉義市西區大貴路78號12樓', '0936631689', '1989-02-01', 'male', '/img/A0321.jpg'),
(322, '范木祟', 'Z3sF4gwJ', 'michaels719@gmail.com', '高雄市三民區鼎金一巷71號', '0915339385', '1967-03-08', 'male', '/img/A0322.jpg'),
(323, '李善樹', '42nGDs3F', 'brown1551@outlook.com', '臺中市北區三民路３段36號6樓', '0939146883', '1975-04-22', 'female', '/img/A0323.jpg'),
(324, '許春泉', 'tL8SUTe7', 'gonzales7579@outlook.com', '新北市中和區錦和路67號', '0970570786', '1963-06-19', 'female', '/img/A0324.jpg'),
(325, '林折良', '2M6733Gt', 'eleana3499@hotmail.com', '雲林縣虎尾鎮民主十路44號', '0929185772', '1984-09-28', 'male', '/img/A0325.jpg'),
(326, '吳強樂', '654qE9Tu', 'garrett7987@gmail.com', '高雄市岡山區前峰路80號7樓之16', '0912674681', '1960-10-29', 'male', '/img/A0326.jpg'),
(327, '劉彌羽', 'n7rW2A3y', 'harold2094@gmail.com', '高雄市鳳山區南正二路50號6樓之10', '0924693232', '1994-05-03', 'female', '/img/A0327.jpg'),
(328, '郭意政', '4r33WUnF', 'maria3775@gmail.com', '臺中市大安區五甲北路40號', '0956647457', '2017-12-08', 'female', '/img/A0328.jpg'),
(329, '胡彤衞', '87eZ6GWq', 'ramos9081@gmail.com', '屏東縣潮州鎮和睦街46號', '0982796676', '2008-05-15', 'female', '/img/A0329.jpg'),
(330, '詹泓瑄', '6Xdv938t', 'isabelle3232@yahoo.com', '屏東縣潮州鎮曲振路36號', '0919375241', '1998-02-01', 'male', '/img/A0330.jpg'),
(331, '王勁強', 'W7JBh9W9', 'bruce2846@hotmail.com', '臺北市信義區嘉興街15號之7', '0932525722', '2019-01-16', 'female', '/img/A0331.jpg'),
(332, '徐品育', '47x2u4yK', 'trent4135@gmail.com', '臺東縣臺東市五權街54號4樓之11', '0923684240', '1960-01-17', 'male', '/img/A0332.jpg'),
(333, '賴嫻鈺', '98cF48eS', 'reed8218@gmail.com', '彰化縣花壇鄉中正路28號之14', '0935762135', '1990-07-21', 'male', '/img/A0333.jpg'),
(334, '劉羚飛', 'QxKUa5zk', 'thomas688@gmail.com', '花蓮縣吉安鄉南海二街47號', '0917984849', '2016-06-30', 'male', '/img/A0334.jpg'),
(335, '古舟豐', '8zysS2AY', 'raphael985@hotmail.com', '彰化縣二林鎮路東巷22號6樓', '0938063268', '1985-10-09', 'male', '/img/A0335.jpg'),
(336, '洪漩琳', '8ep73mf8', 'pitcher8871@gmail.com', '宜蘭縣員山鄉成功二路63號12樓', '0958055747', '2001-11-21', 'female', '/img/A0336.jpg'),
(337, '李力瑜', 'MS53d47A', 'peretti6250@icloud.com', '新北市新莊區中正路新建巷39號', '0939854528', '1986-12-14', 'male', '/img/A0337.jpg'),
(338, '董南柯', '8kg827GP', 'george2680@icloud.com', '南投縣竹山鎮德興巷80號4樓', '0915800168', '2004-03-17', 'male', '/img/A0338.jpg'),
(339, '賴利彌', 'EKMA66qu', 'jackson8936@yahoo.com', '屏東縣屏東市重光巷33號', '0972934849', '1992-03-14', 'male', '/img/A0339.jpg'),
(340, '韓寶承', 'KA2S4e9e', 'bell9979@gmail.com', '新北市新店區小坑三路69號12樓', '0930427283', '2008-06-06', 'male', '/img/A0340.jpg'),
(341, '蕭晨瑋', '654286H6', 'wright2325@gmail.com', '高雄市彌陀區舊港橫路魚塭10號', '0928370230', '1995-10-06', 'female', '/img/A0341.jpg'),
(342, '莊呈瑋', '238hY3z9', 'harris7202@gmail.com', '臺東縣卑南鄉十股8號', '0927204730', '1996-02-11', 'male', '/img/A0342.jpg'),
(343, '馮木蓁', 'tA77y342', 'sebastian9457@gmail.com', '彰化縣員林市南昌路52號', '0918952386', '1995-12-07', 'female', '/img/A0343.jpg'),
(344, '許婉媛', 'bSdK3S28', 'chantel7300@yahoo.com', '高雄市仁武區文南一街87號11樓之6', '0963485576', '1981-10-15', 'male', '/img/A0344.jpg'),
(345, '邱偲新', 'eaYB9995', 'quinn7770@hotmail.com', '新竹縣湖口鄉興華街83號', '0958504860', '1984-03-16', 'male', '/img/A0345.jpg'),
(346, '黃禹聖', '587S9XNF', 'kiley348@hotmail.com', '桃園市中壢區仁愛路23號', '0917601423', '1961-11-01', 'male', '/img/A0346.jpg'),
(347, '劉叡樸', '92U3g86x', 'evan2870@gmail.com', '澎湖縣馬公市西文澳75號', '0911806064', '1964-10-05', 'female', '/img/A0347.jpg'),
(348, '張芪賢', '9Cz6q8QV', 'coombs7522@icloud.com', '臺南市新營區挖仔7號', '0968188992', '2009-04-03', 'male', '/img/A0348.jpg'),
(349, '顏劉超', 'Xs4t896X', 'dan2013@outlook.com', '屏東縣屏東市園西街22號', '0989902382', '1966-11-12', 'male', '/img/A0349.jpg'),
(350, '陸夏安', '76v35895', 'sigrid7290@gmail.com', '嘉義市東區水源地37號4樓', '0919060838', '1966-04-24', 'female', '/img/A0350.jpg'),
(351, '李剛夫', 'K6qsWvT8', 'gavin1761@gmail.com', '雲林縣虎尾鎮忠孝路54號7樓', '0963165855', '1971-06-03', 'male', '/img/A0351.jpg'),
(352, '洪怡捷', 'x4WXZ9k7', 'scott5921@gmail.com', '雲林縣麥寮鄉光復南路33號', '0915708702', '1983-03-03', 'male', '/img/A0352.jpg'),
(353, '林來彬', '4S2BwKre', 'hampden2019@hotmail.com', '臺南市北區長榮路４段48號4樓之14', '0972562342', '1984-05-24', 'male', '/img/A0353.jpg'),
(354, '廖夏汝', 'Z6xCSt35', 'velazquez2413@yahoo.com', '花蓮縣瑞穗鄉中正南路３段90號', '0986512351', '1962-07-11', 'female', '/img/A0354.jpg'),
(355, '陳沐辰', 'Cwvn6EAS', 'ann1432@gmail.com', '嘉義市西區湖美二路65號', '0910127816', '1963-07-02', 'female', '/img/A0355.jpg'),
(356, '呂千鋭', 'R92XxA3u', 'jaden3675@gmail.com', '高雄市三民區遼北街19號', '0924911326', '2008-10-10', 'male', '/img/A0356.jpg'),
(357, '范堇知', 'dY6YK4MS', 'peretti170@gmail.com', '苗栗縣苗栗市英才路74號', '0933517912', '1990-04-07', 'male', '/img/A0357.jpg'),
(358, '陸園影', '45u4z6B3', 'allen6258@outlook.com', '彰化縣芳苑鄉新上路54號', '0968592936', '1966-08-31', 'female', '/img/A0358.jpg'),
(359, '林姝英', 'g53pS94Q', 'eliana6047@gmail.com', '雲林縣北港鎮文化路67號2樓', '0971894082', '1998-04-30', 'female', '/img/A0359.jpg'),
(360, '汪勝淼', '2E9545Pe', 'stenson8407@gmail.com', '桃園市楊梅區幼五路38號5樓', '0919471190', '1969-05-27', 'male', '/img/A0360.jpg'),
(361, '蘇元樂', 'GUK28k42', 'teller6201@gmail.com', '新北市貢寮區內隆林街99號', '0961593706', '2018-09-04', 'female', '/img/A0361.jpg'),
(362, '陳璐緹', 'RzZmK347', 'brookes3078@gmail.com', '宜蘭縣蘇澳鎮信義路53號', '0915967284', '1971-10-06', 'male', '/img/A0362.jpg'),
(363, '吳品棟', 'Y33676y3', 'blackwood5591@gmail.com', '臺東縣長濱鄉八桑安5號8樓之14', '0972981287', '1973-06-23', 'male', '/img/A0363.jpg'),
(364, '呂寧書', 'pr57Z8s2', 'blaine568@gmail.com', '新北市新莊區榮華路2段50號5樓', '0933327673', '2005-12-17', 'female', '/img/A0364.jpg'),
(365, '阮泛齊', 'q8Fy6H8t', 'theresa8586@gmail.com', '桃園市桃園區復興路85號', '0912597058', '1968-05-04', 'female', '/img/A0365.jpg'),
(366, '李昊羣', 'KByg69Jt', 'joe8027@outlook.com', '臺中市沙鹿區中山路金星二巷73號', '0956689299', '1988-01-28', 'male', '/img/A0366.jpg'),
(367, '李于鬆', '65Er6yvn', 'price1298@gmail.com', '臺中市北屯區崇德七路13號', '0926845446', '2008-05-24', 'male', '/img/A0367.jpg'),
(368, '陳樹韶', '6944t8L3', 'gilbert7450@hotmail.com', '新竹市東區武昌街32號之20', '0930974095', '1981-08-10', 'male', '/img/A0368.jpg'),
(369, '張藻鑫', '3CyAFK2L', 'giles7979@gmail.com', '桃園市平鎮區居易四區77號之8', '0923219803', '1976-01-04', 'female', '/img/A0369.jpg'),
(370, '張世威', 'kEUZcL4h', 'king6731@gmail.com', '彰化縣溪州鄉劉厝巷48號10樓', '0935478037', '1993-12-25', 'female', '/img/A0370.jpg'),
(371, '朱園芯', 'T825u8za', 'thomas9502@outlook.com', '雲林縣元長鄉四股39號10樓之11', '0929337108', '1995-11-17', 'male', '/img/A0371.jpg'),
(372, '林斯鈞', 'ms7gGh6T', 'kevin3053@yahoo.com', '嘉義市西區新榮路39號之17', '0952175809', '2018-01-26', 'male', '/img/A0372.jpg'),
(373, '高勳晉', 'e967aWS8', 'danny1120@yahoo.com', '臺南市東區文化二街55號', '0960527274', '1999-04-22', 'male', '/img/A0373.jpg'),
(374, '古利宣', 'Ber27Ze5', 'margolyes3387@gmail.com', '雲林縣四湖鄉美山街21號', '0970336809', '2016-11-12', 'female', '/img/A0374.jpg'),
(375, '林威理', '458w8H88', 'trent5709@yahoo.com', '新北市板橋區懷仁街79號', '0970468434', '2009-03-01', 'male', '/img/A0375.jpg'),
(376, '王叢雪', 'BZ86Dwfg', 'wood8534@gmail.com', '花蓮縣新城鄉新興二街43號11樓', '0915854021', '1974-07-02', 'male', '/img/A0376.jpg'),
(377, '余彥眾', '425uSUQ7', 'thompson2813@yahoo.com', '新北市三重區神農街28號之20', '0953762153', '2003-04-25', 'male', '/img/A0377.jpg'),
(378, '吳吉捷', '6S23Zt74', 'bieber8220@gmail.com', '屏東縣東港鎮頂新街66號', '0920863728', '1960-03-29', 'male', '/img/A0378.jpg'),
(379, '江歆雙', 'X48Fe5uh', 'alvin5620@hotmail.com', '臺中市西區博館路84號之8', '0918002167', '1991-12-08', 'female', '/img/A0379.jpg'),
(380, '陳叡語', 'u2g34nSy', 'kathryn9848@gmail.com', '嘉義縣大林鎮麻園寮43號11樓之7', '0916827744', '1976-10-14', 'male', '/img/A0380.jpg'),
(381, '紀可泛', 'q36qH76a', 'hayden9294@gmail.com', '嘉義縣太保市棒球一街34號', '0958261974', '1991-12-16', 'female', '/img/A0381.jpg'),
(382, '何思育', 'vJ5G928Z', 'raymond2244@gmail.com', '嘉義市西區埤子頭80號', '0939933509', '2017-01-13', 'male', '/img/A0382.jpg'),
(383, '藍華蒨', 'X7gksYn7', 'harrison4974@hotmail.com', '臺東縣金峰鄉嘉蘭60號', '0961472354', '1992-06-26', 'female', '/img/A0383.jpg'),
(384, '陳淳鳳', '5H6C444A', 'miranda1034@hotmail.com', '臺中市清水區文昌街41號', '0958048720', '1967-03-24', 'female', '/img/A0384.jpg'),
(385, '沈崇川', 'H9fMe7kS', 'clark5827@gmail.com', '宜蘭縣宜蘭市延平一路39號之13', '0922499899', '1988-12-03', 'female', '/img/A0385.jpg'),
(386, '洪夕韻', 'R349rJ53', 'connie4442@yahoo.com', '新竹縣湖口鄉長青路12號2樓', '0923821464', '2013-11-16', 'female', '/img/A0386.jpg'),
(387, '董天琪', 'q767Uz23', 'dan7931@gmail.com', '新竹縣芎林鄉福昌街50號', '0934743111', '1993-02-19', 'female', '/img/A0387.jpg'),
(388, '吳棋瀟', 'R6U9hq4W', 'franco1918@hotmail.com', '嘉義縣番路鄉岩仔後89號', '0918035059', '1961-04-26', 'male', '/img/A0388.jpg'),
(389, '洪坤浚', 'emZgP935', 'eduardo1928@yahoo.com', '臺中市潭子區潭豐路2段65號', '0931215324', '2001-08-06', 'male', '/img/A0389.jpg'),
(390, '劉山靖', '46r84S8X', 'nolan6707@hotmail.com', '花蓮縣豐濱鄉豐富98號8樓', '0953619001', '1999-09-26', 'male', '/img/A0390.jpg'),
(391, '童宣禹', 'np2CFAW8', 'campbell5957@gmail.com', '臺中市龍井區中山中路１段91號', '0932883497', '1998-09-18', 'male', '/img/A0391.jpg'),
(392, '張可品', 'WFs923bL', 'garrix2672@gmail.com', '彰化縣彰化市田中路48號', '0954963895', '1995-04-02', 'male', '/img/A0392.jpg'),
(393, '蔡寧慈', '456p3vXv', 'longoria9094@gmail.com', '屏東縣恆春鎮虎頭路39號', '0968021141', '1972-01-02', 'female', '/img/A0393.jpg'),
(394, '林堇星', '5hy92954', 'daxton2135@yahoo.com', '嘉義市西區大富西街70號5樓', '0989404655', '2001-04-22', 'female', '/img/A0394.jpg'),
(395, '范月齊', '446KdBBf', 'britton3762@hotmail.com', '彰化縣伸港鄉埤墘一路83號', '0934466936', '1964-08-30', 'female', '/img/A0395.jpg'),
(396, '侯夕珍', '4sAGLdL6', 'kennedy6376@outlook.com', '新北市金山區中信北路4號', '0910719939', '1985-01-28', 'male', '/img/A0396.jpg'),
(397, '郭偉韶', 'rX4492FN', 'keith3703@gmail.com', '高雄市小港區鴻星二路83號', '0986831928', '1992-04-10', 'female', '/img/A0397.jpg'),
(398, '劉修易', '6KR2na37', 'george2428@gmail.com', '新竹縣湖口鄉實踐路71號之15', '0914184679', '1990-07-19', 'female', '/img/A0398.jpg'),
(399, '吳慈昱', 'exf6XQ38', 'nicole6172@gmail.com', '臺南市安平區文平路79號2樓', '0931822248', '1967-11-26', 'female', '/img/A0399.jpg'),
(400, '林勛澤', '4gVmG956', 'thomas2737@hotmail.com', '花蓮縣玉里鎮城西五街4號', '0971464404', '1993-09-17', 'male', '/img/A0400.jpg'),
(401, '張浩鬆', 'Va755kky', 'margaret4713@gmail.com', '花蓮縣吉安鄉自強路自強巷65號2樓之16', '0936210255', '1998-10-10', 'female', '/img/A0401.jpg'),
(402, '董濤芳', '9XWn5AcT', 'patel8717@yahoo.com', '臺北市大安區羅斯福路2段5號', '0925714535', '1991-05-20', 'male', '/img/A0402.jpg'),
(403, '汪安漢', '5c5FPmgX', 'castillo5138@gmail.com', '桃園市桃園區天祥二街43號', '0929332250', '1992-01-05', 'female', '/img/A0403.jpg'),
(404, '涂宸旭', '9X7LWxLC', 'carson6085@yahoo.com', '雲林縣口湖鄉東安路60號4樓', '0936178938', '2014-08-31', 'female', '/img/A0404.jpg'),
(405, '余影樂', '79nBpuf3', 'mallette4512@yahoo.com', '雲林縣崙背鄉福興25號', '0921026699', '1992-10-13', 'male', '/img/A0405.jpg'),
(406, '邱嬋瑞', 'X226hCpT', 'riperton4963@gmail.com', '桃園市八德區瑞發街30號之8', '0929782931', '1999-01-16', 'female', '/img/A0406.jpg'),
(407, '田秀霞', '77yu6Q5a', 'lyn9707@hotmail.com', '高雄市鳳山區東福街35號', '0937617166', '1976-10-08', 'female', '/img/A0407.jpg'),
(408, '王東蓁', 'BJ2e9E5R', 'briana6774@yahoo.com', '臺南市白河區三民路7號', '0933452311', '2002-11-08', 'male', '/img/A0408.jpg'),
(409, '李惠洢', 'paD5y5Pv', 'sotomayor7798@gmail.com', '臺北市大同區通河西街１段80號之10', '0925024486', '1963-07-31', 'female', '/img/A0409.jpg'),
(410, '賴宸琉', '958mCm8S', 'luke5659@outlook.com', '宜蘭縣三星鄉集慶二路97號', '0913354765', '2019-11-22', 'female', '/img/A0410.jpg'),
(411, '李文萬', 't47s3ER8', 'millie9244@gmail.com', '苗栗縣造橋鄉長安新村91號9樓', '0961822283', '1970-09-03', 'female', '/img/A0411.jpg');
INSERT INTO `user_data` (`user_id`, `user_name`, `password`, `email`, `user_address`, `phone`, `birthday`, `gender`, `avatar`) VALUES
(412, '江塵鳴', '9hrwtbQM', 'caitlin537@gmail.com', '新北市汐止區保一街38號10樓之5', '0930891400', '1970-10-29', 'male', '/img/A0412.jpg'),
(413, '林歌沐', 'UvLdYPW2', 'taft5958@gmail.com', '臺中市太平區宜昌路11號', '0989285400', '1976-10-24', 'female', '/img/A0413.jpg'),
(414, '潘來彬', 'ZSC5fE8e', 'miller3852@yahoo.com', '新北市中和區民安街95號', '0963652789', '1987-09-13', 'female', '/img/A0414.jpg'),
(415, '蔡叢歌', '59932auf', 'joshua8403@gmail.com', '花蓮縣新城鄉七星街61號6樓', '0952335522', '1985-02-22', 'male', '/img/A0415.jpg'),
(416, '彭妮漢', 'f7Uy3cA8', 'bates6885@gmail.com', '桃園市桃園區三和街100號5樓', '0914333957', '1961-03-14', 'male', '/img/A0416.jpg'),
(417, '阮心瑞', '9buRQ8Pm', 'morris5599@gmail.com', '新竹市東區金山八街97號9樓', '0937059781', '1968-01-26', 'male', '/img/A0417.jpg'),
(418, '張潮瞻', '76U7v4W9', 'whittaker8606@yahoo.com', '屏東縣屏東市公正街85號', '0912640993', '1985-10-04', 'male', '/img/A0418.jpg'),
(419, '洪建聖', 'q3z6zQ26', 'lannister6559@icloud.com', '彰化縣和美鎮南陵路91號', '0912056776', '1973-10-03', 'female', '/img/A0419.jpg'),
(420, '葉佳宸', '9Y3b2MQ9', 'parker2155@yahoo.com', '屏東縣佳冬鄉忠信巷88號', '0952845922', '2006-06-05', 'male', '/img/A0420.jpg'),
(421, '阮千旻', '6M5MvF44', 'dwight8224@gmail.com', '高雄市前鎮區凱旋四路71號', '0933656245', '1998-10-31', 'male', '/img/A0421.jpg'),
(422, '蔡全嫻', '8247M2yT', 'henson767@gmail.com', '彰化縣二林鎮平和街31號12樓', '0930558536', '2010-04-23', 'female', '/img/A0422.jpg'),
(423, '謝弘維', 't6r63985', 'keith9022@hotmail.com', '南投縣仁愛鄉山林巷69號12樓之13', '0915918227', '1990-11-20', 'female', '/img/A0423.jpg'),
(424, '周心連', 'S4G5995c', 'bell1480@yahoo.com', '臺南市安南區台江大道５段4號6樓之16', '0914065757', '1995-09-22', 'female', '/img/A0424.jpg'),
(425, '李才樂', 'qu9g82E3', 'chris3162@yahoo.com', '新北市新莊區瓊林北路9號', '0929511690', '1972-09-20', 'male', '/img/A0425.jpg'),
(426, '姜儀茜', 'K4mBw537', 'sophia953@outlook.com', '新北市板橋區大東街96號之4', '0914473351', '1981-01-03', 'female', '/img/A0426.jpg'),
(427, '董天強', 'meeBKk4Z', 'johnson6362@yahoo.com', '臺中市西屯區工業區四十一路49號', '0935696450', '2002-11-06', 'male', '/img/A0427.jpg'),
(428, '郭芷韋', '8Kz659g2', 'rupert5157@gmail.com', '高雄市鳳山區工協街94號8樓', '0958369286', '1976-04-07', 'male', '/img/A0428.jpg'),
(429, '謝宗平', 'y32JVzhf', 'brooks3751@gmail.com', '新北市泰山區仁義路76號', '0935787461', '2002-12-29', 'female', '/img/A0429.jpg'),
(430, '傅承雄', '7EacD3F2', 'percy8600@icloud.com', '臺中市南區樹義二巷18號6樓之15', '0938553229', '2011-06-24', 'male', '/img/A0430.jpg'),
(431, '蔣喧婷', '2W623T4h', 'freud7419@hotmail.com', '高雄市燕巢區海成東街85號之16', '0928297814', '1986-04-22', 'female', '/img/A0431.jpg'),
(432, '侯帆淼', 'Z6zU5qGR', 'deborah821@gmail.com', '高雄市美濃區下九寮49號', '0937093184', '2019-04-17', 'female', '/img/A0432.jpg'),
(433, '古媗旻', '6Ue86qG2', 'taft1144@yahoo.com', '苗栗縣西湖鄉箭竹坑29號', '0924203314', '1970-06-15', 'female', '/img/A0433.jpg'),
(434, '許羽龍', '3D224QYq', 'katherine7463@gmail.com', '屏東縣屏東市治平巷90號', '0956353588', '1971-10-13', 'male', '/img/A0434.jpg'),
(435, '彭沐鳳', 'yXP2qFJp', 'hillary4112@gmail.com', '桃園市蘆竹區東溪路7號', '0935873121', '1989-02-14', 'female', '/img/A0435.jpg'),
(436, '黃易瑾', 'GUH288cN', 'dorian3699@hotmail.com', '臺南市安南區海東七街78號之2', '0926168030', '2008-11-11', 'female', '/img/A0436.jpg'),
(437, '曾微珮', 'ZKPwyXcH', 'kenny9547@gmail.com', '臺北市松山區南京東路３段57號之14', '0935851344', '2020-05-07', 'female', '/img/A0437.jpg'),
(438, '陳得港', '3tXa9bRK', 'guerrero8648@gmail.com', '臺南市北區北忠街88號之15', '0932404820', '2008-05-27', 'female', '/img/A0438.jpg'),
(439, '楊容軒', '2K9Z234C', 'bates4757@gmail.com', '臺東縣臺東市仁八街22號', '0929478088', '1994-09-10', 'female', '/img/A0439.jpg'),
(440, '馬益秀', 'XT5s62ZS', 'green4983@outlook.com', '桃園市觀音區二聖路52號之2', '0935588848', '2012-06-09', 'female', '/img/A0440.jpg'),
(441, '葉悦齊', '28963G5T', 'kennedy598@gmail.com', '南投縣草屯鎮敦和路新和巷12號', '0970157111', '2000-05-17', 'female', '/img/A0441.jpg'),
(442, '廖嫣鬱', 'Xp83V79r', 'keith512@gmail.com', '宜蘭縣蘇澳鎮志成路26號', '0954438998', '2005-02-03', 'male', '/img/A0442.jpg'),
(443, '黃平康', '576Wvp77', 'jordan6527@yahoo.com', '桃園市桃園區永安路72號之17', '0935280734', '1999-06-30', 'female', '/img/A0443.jpg'),
(444, '蔡業貴', 'q79cE275', 'burton9318@gmail.com', '新竹縣湖口鄉德和路15號11樓', '0955129213', '1960-04-01', 'male', '/img/A0444.jpg'),
(445, '林峻智', '6ST5WJ62', 'mason8820@gmail.com', '彰化縣彰化市彰美路１段57號之11', '0982449006', '1970-10-12', 'female', '/img/A0445.jpg'),
(446, '李濤霞', '5yZC64cE', 'gina2264@gmail.com', '嘉義縣民雄鄉忠義街54號', '0918987558', '1970-07-27', 'male', '/img/A0446.jpg'),
(447, '陳泓靖', '25WUAn2X', 'danielle495@gmail.com', '臺北市信義區忠孝東路５段4號3樓', '0936767739', '1967-11-06', 'male', '/img/A0447.jpg'),
(448, '林源瑤', '8696768w', 'trenton7484@gmail.com', '桃園市大園區水源路48號6樓', '0989231960', '2020-08-21', 'male', '/img/A0448.jpg'),
(449, '楊庸鈞', 'tU69E9QN', 'surname4300@yahoo.com', '臺中市沙鹿區天仁南街64號', '0987892305', '2016-03-25', 'female', '/img/A0449.jpg'),
(450, '歐浩育', '34gh47Dt', 'christensen5749@gmail.com', '臺中市西區自治街14號7樓', '0932940539', '1963-03-17', 'female', '/img/A0450.jpg'),
(451, '江福馨', '3P67FB8e', 'bryan7124@gmail.com', '高雄市鼓山區青峰街30號2樓', '0923647106', '1998-04-03', 'female', '/img/A0451.jpg'),
(452, '蔣妮宸', 'J64Sg868', 'emily1892@gmail.com', '臺南市仁德區長興四街46號', '0960440693', '1964-10-12', 'male', '/img/A0452.jpg'),
(453, '姚志捷', '2eSswN6y', 'lannister7832@gmail.com', '臺南市仁德區崑崙路12號', '0939042208', '1987-05-12', 'male', '/img/A0453.jpg'),
(454, '黃影益', 'R72E9Ltz', 'vicky9817@gmail.com', '雲林縣虎尾鎮六十甲路43號12樓', '0911123281', '2000-11-15', 'male', '/img/A0454.jpg'),
(455, '葉肇靈', 'LhTS29M8', 'gilbert9743@gmail.com', '臺中市西屯區大有五街72號', '0954108923', '2020-10-20', 'female', '/img/A0455.jpg'),
(456, '尤文淼', '2eg8H682', 'erin7091@yahoo.com', '臺北市中正區大埔街51號', '0936300977', '1992-06-26', 'female', '/img/A0456.jpg'),
(457, '邱安謙', 'CftT3VAP', 'nancy5993@hotmail.com', '臺東縣長濱鄉水母丁98號', '0927621586', '2004-07-10', 'male', '/img/A0457.jpg'),
(458, '蘇姝宥', '4SZ8zv27', 'jalen6875@gmail.com', '桃園市桃園區經國路23號之16', '0936027924', '1998-01-12', 'female', '/img/A0458.jpg'),
(459, '李夕翊', '64YsZPxa', 'charlotte9238@yahoo.com', '嘉義市西區友忠路64號', '0917541644', '1966-03-15', 'female', '/img/A0459.jpg'),
(460, '劉依君', 'A3CTXey7', 'ryder6798@yahoo.com', '臺南市安南區工業八路80號11樓之18', '0924533571', '1989-03-19', 'male', '/img/A0460.jpg'),
(461, '鄧瑄璧', '487Qw5X9', 'diane3478@yahoo.com', '宜蘭縣礁溪鄉踏踏路16號', '0930192936', '1974-04-08', 'male', '/img/A0461.jpg'),
(462, '范奕慧', '6QyQut4w', 'kirk9213@gmail.com', '臺中市沙鹿區保安路63號', '0939966718', '1996-09-23', 'female', '/img/A0462.jpg'),
(463, '賴珂鈺', 'W3JM6mZv', 'kayla4699@gmail.com', '臺中市南區平順街42號', '0928618592', '2002-02-16', 'male', '/img/A0463.jpg'),
(464, '孫偲瑾', '84fB8p52', 'vanessa6112@outlook.com', '新北市中和區中安街81號12樓', '0927152264', '2000-04-19', 'male', '/img/A0464.jpg'),
(465, '陸帆衞', '48pbytuX', 'burton3454@gmail.com', '新竹縣竹東鎮敦睦街84號', '0989272596', '1993-12-30', 'female', '/img/A0465.jpg'),
(466, '黃宇源', 'S5d24583', 'jerry6313@gmail.com', '彰化縣溪州鄉七戶巷2號6樓', '0913223606', '2004-05-25', 'female', '/img/A0466.jpg'),
(467, '李彥洢', '4aUFLJzD', 'cruz9830@hotmail.com', '高雄市大寮區干城路13號之17', '0913454800', '1980-01-12', 'male', '/img/A0467.jpg'),
(468, '杜又帆', 'X38dWvf8', 'sheldon2276@gmail.com', '新北市土城區中央路３段82號之8', '0987735818', '2009-05-03', 'female', '/img/A0468.jpg'),
(469, '蔡宜智', 'W9naqH48', 'nguyen993@hotmail.com', '桃園市觀音區桃科六路39號', '0956247687', '2008-03-04', 'female', '/img/A0469.jpg'),
(470, '薛奕璟', 'v89x489D', 'hammer7142@yahoo.com', '臺北市大同區酒泉街9號9樓', '0958184102', '1989-02-23', 'male', '/img/A0470.jpg'),
(471, '許帆育', 'pUyMMdUT', 'lautner4585@icloud.com', '臺北市文山區景華街95號之19', '0924725684', '2004-10-20', 'male', '/img/A0471.jpg'),
(472, '余丞皓', '538GQpC3', 'hughes159@icloud.com', '屏東縣屏東市建豐路50號', '0956056824', '1996-12-08', 'male', '/img/A0472.jpg'),
(473, '張誠鋭', 'EaH39tW8', 'charles336@gmail.com', '桃園市楊梅區大金山下88號9樓', '0917206194', '1999-09-25', 'female', '/img/A0473.jpg'),
(474, '陳年慈', '7JS6M4AV', 'louis7479@outlook.com', '臺中市神岡區和睦路１段91號之9', '0931279357', '1997-07-23', 'female', '/img/A0474.jpg'),
(475, '陳碧軒', '52nNZ7UE', 'brendan6378@gmail.com', '臺南市東區崇德十九街50號6樓之17', '0911233511', '2000-09-25', 'male', '/img/A0475.jpg'),
(476, '余召鋒', '26U35v33', 'selina2088@icloud.com', '高雄市仁武區大正五街86號', '0982037077', '1976-10-28', 'female', '/img/A0476.jpg'),
(477, '周柏邦', '6c5L8uk3', 'tom6685@yahoo.com', '臺中市神岡區福庄街17號12樓', '0954419229', '2011-01-12', 'male', '/img/A0477.jpg'),
(478, '江如昱', 'Ef926uB9', 'tara296@gmail.com', '臺北市大安區和平東路2段52號', '0938802842', '1994-08-07', 'female', '/img/A0478.jpg'),
(479, '蔣圖奇', 'J239cP9u', 'green6109@gmail.com', '新北市淡水區樟腦寮坪53號10樓', '0914866855', '2013-10-10', 'female', '/img/A0479.jpg'),
(480, '邵彤易', '3b7H8Q2w', 'hill1162@gmail.com', '高雄市美濃區福美路7號8樓', '0988806580', '1986-05-29', 'female', '/img/A0480.jpg'),
(481, '馮洋顏', '4zehE983', 'eich6724@gmail.com', '花蓮縣花蓮市福建一街37號', '0953941790', '1962-10-01', 'male', '/img/A0481.jpg'),
(482, '嚴喧菡', 'JT27Fq5E', 'lakshmi4604@gmail.com', '苗栗縣竹南鎮南安街36號', '0982500520', '1981-06-20', 'male', '/img/A0482.jpg'),
(483, '戴芳莉', 'P98854Je', 'george2253@gmail.com', '高雄市前鎮區康和路29號', '0913877427', '1987-09-02', 'female', '/img/A0483.jpg'),
(484, '洪暢玉', '7y793ApL', 'johnson9639@hotmail.com', '高雄市鳥松區永昌街14號', '0926739916', '2001-04-20', 'male', '/img/A0484.jpg'),
(485, '楊採美', 'W6yv3TsN', 'carter3053@hotmail.com', '高雄市大寮區會興一街19號', '0955435111', '2008-11-02', 'female', '/img/A0485.jpg'),
(486, '嚴全恩', 'UhtweE8C', 'peretti3544@gmail.com', '宜蘭縣冬山鄉安農七路9號之2', '0915080030', '2010-03-19', 'female', '/img/A0486.jpg'),
(487, '黃海芬', '7z2T9A7k', 'buckley2349@gmail.com', '高雄市鳳山區南京路7號之1', '0915176474', '2001-05-27', 'female', '/img/A0487.jpg'),
(488, '郭依鴻', '5gGzTWmJ', 'russell5475@gmail.com', '臺南市永康區中正路33號', '0912719076', '1963-05-04', 'male', '/img/A0488.jpg'),
(489, '蔣莎露', 'ht2m3KF4', 'stenson9085@icloud.com', '屏東縣內埔鄉中圳巷98號', '0972885922', '2006-09-18', 'female', '/img/A0489.jpg'),
(490, '陳維英', '7c258A7B', 'joyce2156@yahoo.com', '臺中市沙鹿區興益路79號', '0923759642', '1970-08-01', 'female', '/img/A0490.jpg'),
(491, '劉優玫', 'E46696AS', 'wilmore2437@hotmail.com', '彰化縣彰化市建國西街14號8樓之8', '0953351211', '1972-07-03', 'female', '/img/A0491.jpg'),
(492, '劉娟珈', '4JyU4Z2M', 'barry7839@hotmail.com', '高雄市小港區學府路44號', '0924799429', '1993-12-07', 'male', '/img/A0492.jpg'),
(493, '楊揚鳳', '8xSf4sb3', 'christina888@gmail.com', '雲林縣虎尾鎮信義路28號之16', '0929682629', '2007-12-27', 'female', '/img/A0493.jpg'),
(494, '陳沛玲', 'k6r8b2gc', 'abbadie6848@hotmail.com', '嘉義縣朴子市新進路18號5樓', '0963559209', '1972-09-30', 'female', '/img/A0494.jpg'),
(495, '丁珈璟', '8UE2639F', 'keyser5538@outlook.com', '南投縣南投市信義街54號9樓', '0910651494', '2014-08-20', 'female', '/img/A0495.jpg'),
(496, '蔡許軒', '8L2J99kg', 'hannah2065@outlook.com', '新北市五股區芳洲六路49號', '0982961346', '1973-07-09', 'female', '/img/A0496.jpg'),
(497, '張洪瑗', '85D43K7H', 'ryder3819@yahoo.com', '屏東縣屏東市尚榮巷73號', '0934508719', '1990-11-23', 'male', '/img/A0497.jpg'),
(498, '唐丞霄', '65tHFP2r', 'kudrow5746@yahoo.com', '臺北市萬華區康定路3號之2', '0917269406', '2002-02-14', 'male', '/img/A0498.jpg'),
(499, '邱孝晤', 'Am7Kk4g4', 'brendan3132@gmail.com', '高雄市林園區三官路47號', '0924087249', '1984-07-12', 'male', '/img/A0499.jpg'),
(500, '戴婉鬱', 'uvX4UPn9', 'grant1285@gmail.com', '彰化縣埔鹽鄉番金路100號之7', '0919518851', '1997-12-21', 'female', '/img/A0500.jpg');
-- ----------------------------
-- 營地的房型 room 
-- ----------------------------
DROP TABLE IF EXISTS `room`;
-- 營地的房型 room 的資料表
CREATE TABLE `room` 
(
  `camp_type_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `camp_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `camping_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `bed_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `r_total_person` int DEFAULT NULL,
  `food_type`varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `camp_pic` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`camp_type_id`),
  
  CONSTRAINT `Fk_camp_name2` FOREIGN KEY (`camp_name`) REFERENCES `place_info` (`camp_name`),
  CONSTRAINT `FK_camping_type2` FOREIGN KEY (`camping_type`) REFERENCES `camping_type_list`(`camping_type`),
  CONSTRAINT `FK_bed_name2` FOREIGN KEY (`bed_name`) REFERENCES `bed_type`(`bed_name`),
  CONSTRAINT `FK_food_type2` FOREIGN KEY (`food_type`) REFERENCES `food`(`food_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 傾印資料表的資料 `room`
INSERT INTO `room` (`camp_type_id`, `camp_name`, `camping_type`, `bed_name`, `r_total_person`, `food_type`,`camp_pic`) VALUES
('RT4541', '走馬賴農場', '露營場', '雙人床', 2, '附早餐',''),
('RT4542', '山Chill', '露營車', '單人床', 4, '附午餐',''),
('RT4543', '星空漫漫 Starry sky', '露營場', '睡袋', 6, '附晚餐',''),
('RT4544', '綠光森林', '小木屋', '雙人床', 3, '附全餐',''),
('RT4545', '露營天堂', '渡假村', '單人床', 5, '無附餐',''),
('RT4546', '海濱露營區', '露營車', '雙人床', 2, '附早餐',''),
('RT4547', '天空之城', '帳篷', '睡袋', 4, '附午餐',''),
('RT4548', '森林露營地', '小木屋', '雙人床', 6, '附晚餐',''),
('RT4549', '月光露營區', '露營場', '單人床', 3, '附全餐',''),
('RT4550', '山谷營地', '帳篷', '雙人床', 5, '無附餐',''),
('RT4551', '海邊小屋', '露營場', '睡袋', 2, '附早餐',''),
('RT4552', '山中秘境', '露營車', '雙人床', 4, '附午餐',''),
('RT4553', '湖畔之家', '帳篷', '單人床', 6, '附晚餐',''),
('RT4554', '森林小屋', '小木屋', '雙人床', 3, '附全餐',''),
('RT4555', '沙灘樂園', '渡假村', '睡袋', 5, '無附餐',''),
('RT4556', '高山景觀', '露營車', '單人床', 2, '附早餐',''),
('RT4557', '湖邊露營地', '帳篷', '雙人床', 4, '附午餐',''),
('RT4558', '綠野仙蹤', '小木屋', '睡袋', 6, '附晚餐',''),
('RT4559', '藍天白雲', '露營場', '雙人床', 3, '附全餐',''),
('RT4560', '山林小徑', '露營車', '單人床', 5, '無附餐','');

-- ----------------------------
-- 活動的房型 roomE 
-- ----------------------------
DROP TABLE IF EXISTS `roomE`;
-- 營地的房型 room 的資料表
CREATE TABLE `roomE` 
(
  `e_camp_type_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `e_total_person` int DEFAULT NULL,
  `camp_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `camping_theme` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `camping_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `bed_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `food_type`varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `pet_type`varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ser_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `child_type`varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `feature_category` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`e_camp_type_id`),
  
  CONSTRAINT `Fk_camp_name3` FOREIGN KEY (`camp_name`) REFERENCES `place_info` (`camp_name`),
  CONSTRAINT `Fk_camping_theme3` FOREIGN KEY (`camping_theme`) REFERENCES `camping_theme_list` (`camping_theme`),
  CONSTRAINT `FK_camping_type3` FOREIGN KEY (`camping_type`) REFERENCES `camping_type_list`(`camping_type`),
  CONSTRAINT `FK_bed_name3` FOREIGN KEY (`bed_name`) REFERENCES `bed_type`(`bed_name`),
  CONSTRAINT `FK_food_type3` FOREIGN KEY (`food_type`) REFERENCES `food`(`food_type`),
  CONSTRAINT `FK_pet_type3` FOREIGN KEY (`pet_type`) REFERENCES `pet`(`pet_type`),
  CONSTRAINT `FK_ser_name3` FOREIGN KEY (`ser_name`) REFERENCES `services`(`ser_name`),
  CONSTRAINT `FK_child_type3` FOREIGN KEY (`child_type`) REFERENCES `child_fac`(`child_type`),
  CONSTRAINT `FK_feature_category3` FOREIGN KEY (`feature_category`) REFERENCES `feature_category_list`(`feature_category`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 傾印資料表的資料 `roomE`
INSERT INTO `roomE` (`e_camp_type_id`, `e_total_person`, `camp_name`, `camping_theme`, `camping_type`, `bed_name`, `food_type`, `pet_type`, `ser_name`, `child_type`, `feature_category`) VALUES
('RE1', 4, '走馬賴農場', '豪華露營', '露營場', '雙人床', '附早餐', '可攜帶寵物', '停車場', '嬰兒設施', '附冷氣'),
('RE2', 3, '山Chill', '懶人露營', '露營車', '單人床', '附午餐', '可攜帶寵物', '接送服務', '親子設施', '親子活動'),
('RE3', 6, '星空漫漫 Starry sky', '常規露營(自搭帳露營)', '露營場', '睡袋', '附晚餐', '可攜帶寵物', '導覽服務', '無', '高海拔'),
('RE4', 5, '綠光森林', '免裝備露營', '小木屋', '雙人床', '附全餐', '可攜帶寵物', '停車場', '親子設施', '親子活動'),
('RE5', 2, '露營天堂', '豪華露營', '渡假村', '單人床', '無附餐', '不可攜帶寵物', '接送服務', '嬰兒設施', '寵物友善'),
('RE6', 3, '海濱露營區', '懶人露營', '露營車', '雙人床', '附早餐', '可攜帶寵物', '導覽服務', '無', '海景'),
('RE7', 4, '天空之城', '常規露營(自搭帳露營)', '帳篷', '睡袋', '附午餐', '不可攜帶寵物', '停車場', '親子設施', '高海拔'),
('RE8', 6, '森林露營地', '免裝備露營', '小木屋', '雙人床', '附晚餐', '可攜帶寵物', '接送服務', '嬰兒設施', '親子活動'),
('RE9', 3, '月光露營區', '豪華露營', '露營場', '單人床', '附全餐', '可攜帶寵物', '導覽服務', '親子設施', '星空夜景'),
('RE10', 5, '山谷營地', '懶人露營', '帳篷', '雙人床', '無附餐', '不可攜帶寵物', '停車場', '無', '交通易達'),
('RE11', 2, '海邊小屋', '豪華露營', '露營場', '睡袋', '附早餐', '可攜帶寵物', '接送服務', '親子設施', '海景'),
('RE12', 4, '山中秘境', '懶人露營', '露營車', '雙人床', '附午餐', '不可攜帶寵物', '導覽服務', '嬰兒設施', '高海拔'),
('RE13', 6, '湖畔之家', '常規露營(自搭帳露營)', '帳篷', '單人床', '附晚餐', '可攜帶寵物', '停車場', '無', '湖景'),
('RE14', 3, '森林小屋', '免裝備露營', '小木屋', '雙人床', '附全餐', '不可攜帶寵物', '接送服務', '親子設施', '親子活動'),
('RE15', 5, '沙灘樂園', '豪華露營', '渡假村', '睡袋', '無附餐', '可攜帶寵物', '導覽服務', '嬰兒設施', '海景'),
('RE16', 2, '高山景觀', '懶人露營', '露營車', '單人床', '附早餐', '不可攜帶寵物', '停車場', '無', '高海拔'),
('RE17', 4, '湖邊露營地', '常規露營(自搭帳露營)', '帳篷', '雙人床', '附午餐', '可攜帶寵物', '接送服務', '親子設施', '湖景'),
('RE18', 6, '綠野仙蹤', '免裝備露營', '小木屋', '睡袋', '附晚餐', '不可攜帶寵物', '導覽服務', '嬰兒設施', '親子活動'),
('RE19', 3, '藍天白雲', '豪華露營', '露營場', '雙人床', '附全餐', '可攜帶寵物', '停車場', '親子設施', '星空夜景'),
('RE20', 5, '山林小徑', '懶人露營', '露營車', '單人床', '無附餐', '不可攜帶寵物', '接送服務', '無', '森林景觀');

-- ----------------------------
-- 訂購資訊 book_info
-- ----------------------------

DROP TABLE IF EXISTS `book_info`;
-- 訂購資訊 book_info 的資料表
CREATE TABLE `book_info`
(
  `room_order_id` INT NOT NULL AUTO_INCREMENT ,
  `user_name` VARCHAR (200) NOT NULL,
  `camp_type_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `r_selected_num` INT DEFAULT NULL,
  `in_date` date DEFAULT NULL,
  `out_date` date DEFAULT NULL,
  `r_created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `r_total_price` int DEFAULT NULL,
  `r_payment` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`room_order_id`),
  
  CONSTRAINT `FK_user_name` FOREIGN KEY (`user_name`) REFERENCES `user_data`(`user_name`) ON DELETE CASCADE,
  CONSTRAINT `FK_camp_type_id` FOREIGN KEY (`camp_type_id`) REFERENCES `room`(`camp_type_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 傾印資料表的資料 `book_info`
INSERT INTO `book_info` VALUES
('240102454','黃亮悟', 'RT4543', 3, '2024-07-09', '2024-07-12', '2024-07-03 09:45:00', 17800, '信用卡付款'),
('240122112','傅昌道', 'RT4544', 4, '2024-07-10', '2024-07-13', '2024-07-04 09:45:00', 21500, '信用卡付款'),
('240122146','劉年騏', 'RT4545', 4, '2024-07-11', '2024-07-14', '2024-07-05 09:45:00', 13500, '信用卡付款'),
('240122423','郭恆晤', 'RT4546', 2, '2024-07-12', '2024-07-15', '2024-07-06 09:45:00', 9900, '信用卡付款'),
('240122111','陳洋澤', 'RT4547', 4, '2024-07-13', '2024-07-14', '2024-07-07 09:45:00', 14500, '信用卡付款'),
('240122424','劉庭莉', 'RT4548', 4, '2024-07-13', '2024-07-14', '2024-07-07 09:45:00', 14500, '信用卡付款'),
('240122456','劉庭莉', 'RT4549', 3, '2024-07-14', '2024-07-16', '2024-07-08 09:45:00', 10900, '信用卡付款'),
('240122413','林瀾芬', 'RT4550', 3, '2024-07-15', '2024-07-17', '2024-07-09 09:45:00', 9800, '信用卡付款'),
('240122412','廖志鬆', 'RT4551', 2, '2024-07-16', '2024-07-18', '2024-07-10 09:45:00', 7200, '信用卡付款'),
('240124154','蕭林玉', 'RT4552', 2, '2024-07-17', '2024-07-19', '2024-07-11 09:45:00', 8200, '信用卡付款'),
('240127154','涂霞露', 'RT4553', 3, '2024-07-18', '2024-07-20', '2024-07-12 09:45:00', 11200, '信用卡付款'),
('240125454','蔡梓鬱', 'RT4554', 3, '2024-07-19', '2024-07-21', '2024-07-13 09:45:00', 11700, '信用卡付款'),
('240172454','鄭初嘉', 'RT4555', 2, '2024-07-20', '2024-07-22', '2024-07-14 09:45:00', 8000, '信用卡付款'),
('240162454','郭康賢', 'RT4556', 4, '2024-07-21', '2024-07-23', '2024-07-15 09:45:00', 14500, '信用卡付款'),
('240152454','曾以新', 'RT4557', 4, '2024-07-22', '2024-07-24', '2024-07-16 09:45:00', 15000, '信用卡付款'),
('240142454','涂霞露', 'RT4558', 3, '2024-07-23', '2024-07-25', '2024-07-17 09:45:00', 10800, '信用卡付款'),
('240132454','陳一豔', 'RT4559', 2, '2024-07-24', '2024-07-26', '2024-07-18 09:45:00', 7300, '信用卡付款'),
('240123154','林晏璧', 'RT4560', 4, '2024-07-25', '2024-07-27', '2024-07-19 09:45:00', 15500, '信用卡付款'),
('240122464','李暉瀟', 'RT4559', 4, '2024-07-26', '2024-07-28', '2024-07-20 09:45:00', 16000, '信用卡付款'),
('240121054','徐淇順', 'RT4558', 3, '2024-07-27', '2024-07-29', '2024-07-21 09:45:00', 11200, '信用卡付款'),
('240121954','顏之俊', 'RT4557', 2, '2024-07-28', '2024-07-30', '2024-07-22 09:45:00', 7900, '信用卡付款'),
('240121854','郭堇易', 'RT4556', 2, '2024-07-29', '2024-07-31', '2024-07-23 09:45:00', 7400, '信用卡付款'),
('240121754','童晉盛', 'RT4555', 3, '2024-07-30', '2024-08-01', '2024-07-24 09:45:00', 11400, '信用卡付款'),
('240121354','黃晏汝', 'RT4554', 3, '2024-07-31', '2024-08-02', '2024-07-25 09:45:00', 12000, '信用卡付款'),
('240122454','王華風', 'RT4553', 4, '2024-08-01', '2024-08-03', '2024-07-26 09:45:00', 15000, '信用卡付款'),
('240122354','黃堇棋', 'RT4552', 4, '2024-08-02', '2024-08-04', '2024-07-27 09:45:00', 15500, '信用卡付款'),
('240121154','廖志鬆', 'RT4551', 2, '2024-08-03', '2024-08-05', '2024-07-28 09:45:00', 7600, '信用卡付款'),
('240121094','蔡梓鬱', 'RT4550', 2, '2024-08-04', '2024-08-06', '2024-07-29 09:45:00', 7800, '信用卡付款'),
('240121254','林晏璧', 'RT4549', 3, '2024-08-05', '2024-08-07', '2024-07-30 09:45:00', 11900, '信用卡付款');
-- --------------------------------------------------------

-- event_holding_list
DROP TABLE IF EXISTS `event_holding_list`;

CREATE TABLE `event_holding_list` (
  `event_id` INT NOT NULL AUTO_INCREMENT,
  `event_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `camp_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `e_host` VARCHAR (200) NOT NULL,
  `e_in_date` date DEFAULT NULL,
  `e_out_date` date DEFAULT NULL,
  `event_notes` varchar(255) DEFAULT NULL,
  `e_created_at`  datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `event_pic` varchar(255) DEFAULT NULL,
  
  PRIMARY KEY (`event_id`),
  UNIQUE KEY (`event_name`),
  CONSTRAINT `FK_camp_name4` FOREIGN KEY (`camp_name`) REFERENCES `place_info`(`camp_name`),
  CONSTRAINT `FK_e_host` FOREIGN KEY (`e_host`) REFERENCES `user_data`(`user_name`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 設定起始值
ALTER TABLE `event_holding_list` AUTO_INCREMENT = 1000001;

-- 匯入10筆假資料
INSERT INTO `event_holding_list` (`event_name`, `camp_name`, `e_host`, `e_in_date`, `e_out_date`, `event_notes`, `e_created_at`,`event_pic`) VALUES
('夏日狂歡派對', '走馬賴農場', '袁冠謹', '2024-08-10', '2024-08-12', '請攜帶個人用具', '2024-07-19 10:00:00',''),
('星空夜晚', '山Chill', '林得辛', '2024-09-05', '2024-09-07', '享受放鬆時光', '2024-07-19 10:10:00',''),
('親子活動', '星空漫漫 Starry sky', '黃亮悟', '2024-08-20', '2024-08-22', '溫度適宜', '2024-07-19 10:20:00',''),
('時尚露營', '綠光森林', '傅昌道', '2024-09-15', '2024-09-17', '靠近交通要道', '2024-07-19 10:30:00',''),
('雲端之上', '露營天堂', '劉年騏', '2024-08-25', '2024-08-27', '請攜帶個人用具', '2024-07-19 10:40:00',''),
('團體共樂', '海邊小屋', '劉宥翊', '2024-09-02', '2024-09-04', '享受放鬆時光', '2024-07-19 10:50:00',''),
('涼爽夏日', '藍天白雲', '郭恆晤', '2024-08-30', '2024-09-01', '請攜帶個人用具', '2024-07-19 11:00:00',''),
('星空夜景', '天空之城', '陳洋澤', '2024-09-08', '2024-09-10', '請攜帶個人用具', '2024-07-19 11:10:00',''),
('釣魚樂', '沙灘樂園' , '林瀾芬', '2024-08-15', '2024-08-17', '享受放鬆時光', '2024-07-19 11:20:00',''),
('高海拔', '山中秘境' , '劉庭莉', '2024-09-12', '2024-09-14', '體驗晨曦', '2024-07-19 11:30:00',''),
('湖畔休閒', '海邊小屋', '葉瑜蓁', '2024-09-20', '2024-09-22', '享受釣魚時光', '2024-07-20 10:00:00',''),
('秋季聚會', '沙灘樂園', '連瓊穎', '2024-09-25', '2024-09-27', '帶上厚外套', '2024-07-20 10:10:00',''),
('自然探索', '山中秘境', '袁波雪', '2024-09-30', '2024-10-02', '觀察野生動物', '2024-07-20 10:20:00',''),
('夏日狂歡', '湖畔之家', '歐卓秀', '2024-08-05', '2024-08-07', '適合全家出遊', '2024-07-20 10:30:00',''),
('夜間冒險', '森林小屋', '傅力穎', '2024-09-10', '2024-09-12', '請帶手電筒', '2024-07-20 10:40:00',''),
('輕鬆一夏', '沙灘樂園', '鐘丞吉', '2024-08-18', '2024-08-20', '適合露營新手', '2024-07-20 10:50:00',''),
('家庭樂', '高山景觀', '黃堇棋', '2024-09-15', '2024-09-17', '請攜帶戶外用具', '2024-07-20 11:00:00',''),
('漫步雲端', '湖邊露營地', '黃晏汝', '2024-08-23', '2024-08-25', '適合高海拔活動', '2024-07-20 11:10:00',''),
('夏日冒險', '綠野仙蹤', '郭康賢', '2024-09-05', '2024-09-07', '注意防曬', '2024-07-20 11:20:00',''),
('高原風光', '藍天白雲', '白於禎', '2024-08-28', '2024-08-30', '觀賞高原景色', '2024-07-20 11:30:00',''),
('山地探險', '天空之城', '曾以新', '2024-09-20', '2024-09-22', '請帶防寒衣物', '2024-07-20 11:40:00',''),
('草原漫步', '山中秘境', '黃思玲', '2024-08-12', '2024-08-14', '適合放風箏', '2024-07-20 11:50:00',''),
('沙灘排球', '山林小徑', '江峻軒', '2024-09-10', '2024-09-12', '享受沙灘運動', '2024-07-20 12:00:00',''),
('清涼一夏', '田園風光', '鍾家鋭', '2024-08-05', '2024-08-07', '帶上泳衣', '2024-07-20 12:10:00',''),
('星空露營', '大海之家', '鍾盛雅', '2024-09-25', '2024-09-27', '觀賞夜空', '2024-07-20 12:20:00',''),
('露營派對', '雲海仙境', '宋冠妤', '2024-08-15', '2024-08-17', '適合團體活動', '2024-07-20 12:30:00',''),
('山中漫步', '寂人樂品', '陳娟泓', '2024-09-30', '2024-10-02', '適合登山愛好者', '2024-07-20 12:40:00',''),
('自然之旅', '田野小屋', '蔡梓鬱', '2024-08-10', '2024-08-12', '觀賞動植物', '2024-07-20 12:50:00',''),
('戶外燒烤', '水上樂園', '溫堯悟', '2024-09-05', '2024-09-07', '準備烤肉食材', '2024-07-20 13:00:00',''),
('高山健行', '雲海仙境', '林晏璧', '2024-08-25', '2024-08-27', '適合戶外運動', '2024-07-20 13:10:00','');
-- --------------------------------------------------------
CREATE TABLE `books` (
  `product_id` INT NOT NULL AUTO_INCREMENT,
  `product_name` varchar(30) NOT NULL,
  `product_type` varchar(30) NOT NULL,
  `product_price` varchar(30) NOT NULL,
  `product_num` varchar(30) NOT NULL,
  `product_desc` varchar(30) NOT NULL,
  `create_at` datetime DEFAULT current_timestamp(),
  `product_pic` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`product_id`)
)  ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `books`
--
INSERT INTO `books` (`product_id`, `product_name`, `product_type`, `product_price`, `product_num`, `product_desc`, `create_at`, `product_pic`) VALUES
(1, '露營帳篷', '商品A:優惠商品', '1300', '20', '高品質防水帳篷，適合全家出遊，提供寬敞舒適的居住空間。', '2024-07-01 09:56:35', 'img1.png'),
(2, '睡袋', '商品C:推薦商品', '300', '35', '舒適保暖睡袋，適合各種戶外環境，保證您的睡眠質量。', '2024-07-02 09:56:35', 'img2.png'),
(3, '露營床墊', '商品B:熱銷商品', '500', '40', '便攜充氣床墊，輕便易用，提供舒適的睡眠體驗。', '2024-07-03 09:56:35', 'img3.png'),
(4, '露營燈', '商品D:出清商品', '120', '60', '高亮度LED露營燈，節能耐用，適合夜間使用。', '2024-07-04 09:56:35', 'img4.png'),
(5, '戶外炊具', '商品D:出清商品', '800', '25', '全套露營炊具，包括鍋碗瓢盆，讓您輕鬆享受戶外美食。', '2024-07-05 09:56:35', 'img5.png'),
(6, '登山背包', '商品B:熱銷商品', '900', '15', '大容量多功能背包，適合長途跋涉，耐用防水。', '2024-07-06 09:56:35', 'img6.png'),
(7, '便攜式椅子', '商品C:推薦商品', '200', '50', '輕便折疊椅，易於攜帶，讓您隨時隨地享受舒適座椅。', '2024-07-07 09:56:35', 'img7.png'),
(8, '露營桌', '商品A:優惠商品', '400', '30', '可摺疊露營桌，穩固耐用，方便野外使用。', '2024-07-08 09:56:35', 'img8.png'),
(9, '露營爐', '商品C:推薦商品', '600', '20', '高效燃氣爐，火力強勁，適合露營及野炊。', '2024-07-09 09:56:35', 'img9.png'),
(10, '野炊餐具套裝', '商品A:優惠商品', '150', '45', '全套不鏽鋼餐具，輕便耐用，易於清潔。', '2024-07-10 09:56:35', 'img10.png'),
(11, '多功能刀', '商品D:出清商品', '80', '70', '多用途野營刀，包括開瓶器、剪刀、鋸齒刀等功能。', '2024-07-11 09:56:35', 'img11.png'),
(12, '野外水壺', '商品C:推薦商品', '100', '55', '大容量運動水壺，防漏設計，適合各種戶外活動。', '2024-07-12 09:56:35', 'img12.png'),
(13, '急救包', '商品A:優惠商品', '250', '40', '戶外急救必備，包含創可貼、紗布、消毒液等。', '2024-07-13 09:56:35', 'img13.png'),
(14, '防水地墊', '商品D:出清商品', '180', '35', '防潮防水地墊，提供舒適的露營環境，耐磨耐用。', '2024-07-14 09:56:35', 'img14.png'),
(15, '燃氣罐', '商品C:推薦商品', '50', '100', '戶外露營燃氣罐，燃燒效率高，適用於各種燃氣爐具。', '2024-07-15 09:56:35', 'img15.png'),
(16, '露營風扇', '商品B:熱銷商品', '220', '30', '便攜露營風扇，靜音設計，提供清涼的戶外體驗。', '2024-07-16 09:56:35', 'img16.png'),
(17, '露營冷氣', '商品D:出清商品', '3000', '10', '便攜式露營冷氣，強效制冷，適合炎熱的夏季露營。', '2024-07-17 09:56:35', 'img17.png'),
(18, '營地燈籠', '商品A:優惠商品', '130', '60', '高亮度營地燈籠，節能耐用，提供充足的照明。', '2024-07-18 09:56:35', 'img18.png'),
(19, '露營床', '商品B:熱銷商品', '700', '20', '舒適露營床，耐用設計，提供良好的睡眠支持。', '2024-07-19 09:56:35', 'img19.png'),
(20, '露營枕頭', '商品D:出清商品', '90', '40', '充氣露營枕頭，便於攜帶，提供舒適的支撐。', '2024-07-20 09:56:35', 'img20.png'),
(21, '登山杖', '商品C:推薦商品', '150', '35', '輕便登山杖，提供穩定的支持，適合各種地形。', '2024-07-21 09:56:35', 'img21.png'),
(22, '露營便攜廁所', '商品B:熱銷商品', '500', '10', '便攜式露營廁所，輕便衛生，適合長時間露營。', '2024-07-22 09:56:35', 'img22.png'),
(23, '露營淋浴袋', '商品A:優惠商品', '120', '20', '便攜式露營淋浴袋，輕便易用，提供戶外淋浴體驗。', '2024-07-23 09:56:35', 'img23.png'),
(24, '露營儲水袋', '商品D:出清商品', '80', '25', '大容量儲水袋，方便攜帶，適合長途跋涉。', '2024-07-24 09:56:35', 'img24.png'),
(25, '便攜式洗衣機', '商品A:優惠商品', '300', '10', '輕便便攜式洗衣機，節能高效，適合露營使用。', '2024-07-25 09:56:35', 'img25.png'),
(26, '野營繩索', '商品C:推薦商品', '50', '50', '耐用野營繩索，適合各種戶外活動，安全可靠。', '2024-07-26 09:56:35', NULL),
(27, '露營網兜', '商品D:出清商品', '40', '60', '多功能露營網兜，輕便耐用，方便收納物品。', '2024-07-27 09:56:35', NULL),
(28, '露營吊床', '商品A:優惠商品', '200', '30', '舒適露營吊床，耐用設計，提供舒適的休息場所。', '2024-07-28 09:56:35', NULL),
(29, '野外指南針', '商品D:出清商品', '60', '45', '精確野外指南針，輕便易用，適合各種探險活動。', '2024-07-29 09:56:35', NULL),
(30, '戶外防蚊燈', '商品B:熱銷商品', '80', '40', '高效防蚊燈，節能耐用，提供長時間的驅蚊效果。', '2024-07-30 09:56:35', NULL),
(31, '露營急救噴霧', '商品A:優惠商品', '40', '50', '露營急救噴霧，便攜設計，適合處理各種小傷口。', '2024-07-31 09:56:35', NULL),
(32, '露營儲物箱', '商品C:推薦商品', '150', '25', '大容量儲物箱，防水防塵，適合收納各種物品。', '2024-08-01 09:56:35', NULL),
(33, '多功能手套', '商品D:出清商品', '70', '55', '耐用多功能手套，適合各種戶外活動，提供保護和抓地力。', '2024-08-02 09:56:35', NULL),
(34, '便攜式折疊桌', '商品A:優惠商品', '250', '20', '輕便折疊桌，方便攜帶，適合露營及戶外活動。', '2024-08-03 09:56:35', NULL),
(35, '防風罩', '商品D:出清商品', '90', '40', '戶外防風罩，保護露營爐具，耐用設計。', '2024-08-04 09:56:35', NULL),
(36, '便攜式電源', '商品D:出清商品', '450', '15', '高容量便攜式電源，適合長時間露營使用。', '2024-08-05 09:56:35', NULL),
(37, '露營收納袋', '商品B:熱銷商品', '70', '50', '實用露營收納袋，方便整理和攜帶各種露營用品。', '2024-08-06 09:56:35', NULL),
(38, '野外急救包', '商品C:推薦商品', '250', '20', '專業野外急救包，包含多種醫療物品，保障您的安全。', '2024-08-07 09:56:35', NULL),
(39, '露營鍋具', '商品B:熱銷商品', '300', '15', '全套露營鍋具，耐高溫設計，適合各種烹飪需求。', '2024-08-08 09:56:35', NULL),
(40, '防風炊具', '商品D:出清商品', '180', '30', '防風設計炊具，提升戶外烹飪效果，耐用可靠。', '2024-08-09 09:56:35', NULL),
(41, '露營垃圾袋', '商品D:出清商品', '30', '70', '高強度垃圾袋，適合戶外活動，方便處理垃圾。', '2024-08-10 09:56:35', NULL),
(42, '露營繩索套件', '商品A:優惠商品', '120', '50', '包含多條耐用露營繩索，適合各種用途，便於搭建帳篷和其他設施。', '2024-08-11 09:56:35', NULL),
(43, '露營木炭', '商品D:出清商品', '40', '80', '高效燃燒木炭，長時間保持火力，適合烤肉和煮食。', '2024-08-12 09:56:35', NULL),
(44, '露營保溫壺', '商品A:優惠商品', '100', '30', '保溫效果優良，適合長時間保溫飲品，便於戶外使用。', '2024-08-13 09:56:35', NULL),
(45, '戶外餐桌', '商品D:出清商品', '200', '20', '便攜戶外餐桌，穩固耐用，適合野外用餐。', '2024-08-14 09:56:35', NULL),
(46, '露營帳篷配件', '商品D:出清商品', '150', '25', '帳篷配件全套，包括支架、繩索等，讓您的帳篷更穩固。', '2024-08-15 09:56:35', NULL),
(47, '戶外野營手電筒', '商品B:熱銷商品', '70', '50', '高亮度手電筒，具有強大照明功能，適合夜間活動。', '2024-08-16 09:56:35', NULL),
(48, '露營防蚊網', '商品A:優惠商品', '90', '35', '高效防蚊網，有效阻隔蚊蟲，保護您的露營環境。', '2024-08-17 09:56:35', NULL),
(49, '露營炭火架', '商品C:推薦商品', '250', '20', '耐高溫炭火架，提供穩定的火源，適合戶外燒烤使用。', '2024-08-18 09:56:35', NULL),
(50, '戶外望遠鏡', '商品B:熱銷商品', '300', '15', '高倍數望遠鏡，提供清晰的遠景觀察，適合戶外觀察。', '2024-08-19 09:56:35', NULL);
-- --------------------------------------------------------
--
-- 資料表結構 `orderlist`
--
DROP TABLE IF EXISTS `orderlist`;
CREATE TABLE `orderlist` (
  `product_order_id` varchar(255) NOT NULL,
  `order_date` varchar(255) DEFAULT NULL,
  `product_payment` varchar(255) DEFAULT NULL,
  `deliver_status` varchar(255) DEFAULT NULL,
  `product_total_price` int(11) DEFAULT NULL,
  `user_name` VARCHAR (200) NOT NULL,
  `deliver_address` varchar(255) DEFAULT NULL,
  primary key(`product_order_id`),
  CONSTRAINT `FK_user_name12` FOREIGN KEY (`user_name`) REFERENCES `user_data`(`user_name`) ON DELETE CASCADE
)  ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `orderlist`
--
INSERT INTO `orderlist` (`product_order_id`, `order_date`, `product_payment`, `deliver_status`, `product_total_price`, `user_name`, `deliver_address`) VALUES
('s_20240708_12345', '2024-07-08', '信用卡', '已到達', 1000, '袁冠謹', '台中市西屯區文心路三段250號'),
('s_20240708_12346', '2024-07-09', '信用卡', '已到達', 1000, '林得辛', '彰化縣彰化市民生路100號'),
('s_20240708_12347', '2024-07-10', '信用卡', '配送中', 1500, '黃亮悟', '宜蘭縣宜蘭市中山路50號'),
('s_20240708_12348', '2024/7/11', '貨到付款', '未出貨', 300, '傅昌道', '台北市大安區忠孝東路一段100號'),
('s_20240708_12349', '2024/7/12', '貨到付款', '未出貨', 800, '劉年騏', '新北市板橋區文化路二段50號'),
('s_20240708_12350', '2024/7/13', '信用卡', '已到達', 600, '劉宥翊', '高雄市苓雅區自強三路20號'),
('s_20240708_12351', '2024/7/14', '信用卡', '配送中', 1200, '郭恆晤', '台南市北區林森路100號'),
('s_20240708_12352', '2024/7/15', '貨到付款', '未出貨', 900, '陳洋澤', '桃園市中壢區中華路一段50號'),
('s_20240708_12353', '2024/7/16', '貨到付款', '未出貨', 700, '林瀾芬', '新竹市東區建功路99號'),
('s_20240708_12354', '2024/7/17', '信用卡', '已到達', 1100, '劉庭莉', '台中市南區建國北路200號'),
('s_20240708_12355', '2024/7/18', '信用卡', '已到達', 1000, '葉瑜蓁', '台南市中西區民族路二段150號'),
('s_20240708_12356', '2024/7/19', '貨到付款', '配送中', 850, '連瓊穎', '台北市中正區羅斯福路四段40號'),
('s_20240708_12357', '2024/7/20', '貨到付款', '配送中', 950, '袁波雪', '高雄市三民區建國一路200號'),
('s_20240708_12358', '2024/7/21', '信用卡', '已到達', 1300, '歐卓秀', '台中市北區崇德路250號'),
('s_20240708_12359', '2024/7/22', '信用卡', '已到達', 700, '傅力穎', '台北市信義區市府路45號'),
('s_20240708_12360', '2024/7/23', '貨到付款', '未出貨', 400, '鐘丞吉', '新北市三峽區三峽路99號'),
('s_20240708_12361', '2024/7/24', '貨到付款', '未出貨', 600, '黃堇棋', '台南市南區長榮路二段120號'),
('s_20240708_12362', '2024/7/25', '信用卡', '配送中', 750, '黃晏汝', '台北市大同區重慶北路三段30號'),
('s_20240708_12363', '2024/7/26', '信用卡', '配送中', 900, '郭康賢', '高雄市左營區文自路70號'),
('s_20240708_12364', '2024/7/27', '貨到付款', '已到達', 800, '白於禎', '台北市士林區天母西路12號'),
('s_20240708_12365', '2024/7/28', '貨到付款', '已到達', 500, '曾以新', '台中市南區建國北路160號'),
('s_20240708_12366', '2024/7/29', '信用卡', '配送中', 950, '黃思玲', '新北市淡水區中正路123號'),
('s_20240708_12367', '2024/7/30', '信用卡', '配送中', 600, '江峻軒', '台南市東區中華東路三段45號'),
('s_20240708_12368', '2024/7/31', '貨到付款', '已到達', 400, '鍾家鋭', '高雄市楠梓區文中路8號'),
('s_20240708_12369', '2024/8/1', '貨到付款', '已到達', 1100, '鍾盛雅', '台北市北投區石牌路二段78號'),
('s_20240708_12370', '2024/8/2', '信用卡', '配送中', 800, '宋冠妤', '新竹市香山區香山路55號'),
('s_20240708_12371', '2024/8/3', '信用卡', '配送中', 950, '陳娟泓', '台中市西區民生路28號'),
('s_20240708_12372', '2024/8/4', '貨到付款', '已到達', 1000, '蔡梓鬱', '台北市大同區迪化街87號'),
('s_20240708_12373', '2024/8/5', '貨到付款', '已到達', 700, '溫堯悟', '台南市南區青年路30號'),
('s_20240708_12374', '2024/8/6', '信用卡', '配送中', 850, '林晏璧', '新北市三峽區三峽路5號'),
('s_20240708_12375', '2024/8/7', '信用卡', '配送中', 1000, '蕭林玉', '高雄市左營區軍校路35號'),
('s_20240708_12376', '2024/8/8', '貨到付款', '已到達', 400, '童晉盛', '台中市南區復興路88號'),
('s_20240708_12377', '2024/8/9', '貨到付款', '已到達', 750, '廖志鬆', '台北市中山區松江路89號'),
('s_20240708_12378', '2024/8/10', '信用卡', '配送中', 950, '盧姣希', '台南市東區中華東路55號'),
('s_20240708_12379', '2024/8/11', '信用卡', '配送中', 600, '郭堇易', '新北市三峡區水源路20號'),
('s_20240708_12380', '2024/8/12', '貨到付款', '已到達', 1100, '陳嬌臻', '台北市信義區光復南路70號'),
('s_20240708_12381', '2024/8/13', '貨到付款', '已到達', 800, '曹彤馨', '台中市西區台中路12號'),
('s_20240708_12382', '2024/8/14', '信用卡', '配送中', 1000, '葉淇賢', '台南市北區建國路30號'),
('s_20240708_12383', '2024/8/15', '信用卡', '配送中', 700, '李暉瀟', '高雄市鳳山區光復路50號'),
('s_20240708_12384', '2024/8/16', '貨到付款', '已到達', 850, '徐淇順', '台北市士林區中正路50號'),
('s_20240708_12385', '2024/8/17', '貨到付款', '已到達', 900, '顏之俊', '台中市北區三民路99號'),
('s_20240708_12386', '2024/8/18', '信用卡', '配送中', 750, '鄭初嘉', '台南市安平區永華路70號'),
('s_20240708_12387', '2024/8/19', '信用卡', '配送中', 600, '田許雙', '新北市板橋區長官路200號'),
('s_20240708_12388', '2024/8/20', '貨到付款', '已到達', 950, '王華風', '高雄市前鎮區中華路90號'),
('s_20240708_12389', '2024/8/21', '貨到付款', '已到達', 700, '涂霞露', '台北市大安區敦化南路50號'),
('s_20240708_12390', '2024/8/22', '信用卡', '配送中', 1000, '傅妍思', '台南市中西區府前路200號'),
('s_20240708_12391', '2024/8/23', '信用卡', '配送中', 850, '王俞精', '台中市南區建國路50號'),
('s_20240708_12392', '2024/8/24', '貨到付款', '已到達', 400, '陳一豔', '台北市中正區南昌路20號'),
('s_20240708_12393', '2024/8/25', '貨到付款', '已到達', 800, '洪福良', '台南市東區東門路120號'),
('s_20240708_12394', '2024/8/26', '信用卡', '配送中', 1000, '趙陽齊', '高雄市鼓山區草衙路25號');
-- --------------------------------------------------------
--
-- 資料表結構 `orderlist_detail`
--
CREATE TABLE `orderlist_detail` (
  `product_order_detail_id` int(11) DEFAULT NULL,
  `product_order_id` varchar(16) DEFAULT NULL,
  `product_id` varchar(13) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price_after_discount_each` int(11) DEFAULT NULL,
  `product_total_price_after_discount_each` int(11) DEFAULT NULL
)  ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `orderlist_detail`
--
INSERT INTO `orderlist_detail` (`product_order_detail_id`, `product_order_id`, `product_id`, `quantity`, `price_after_discount_each`, `product_total_price_after_discount_each`) VALUES
(1, 's_20240708_12345', '1', 2, 800, 1600),
(2, 's_20240708_12345', '2', 5, 160, 800),
(3, 's_20240708_12345', '3', 3, 80, 240),
(4, 's_20240708_12346', '4', 3, 240, 720),
(5, 's_20240708_12346', '5', 1, 640, 640),
(6, 's_20240708_12346', '6', 2, 640, 1280),
(7, 's_20240708_12346', '7', 1, 640, 640),
(8, 's_20240708_12346', '8', 3, 80, 240),
(9, 's_20240708_12347', '9', 2, 800, 1600),
(10, 's_20240708_12347', '10', 5, 160, 800),
(11, 's_20240708_12348', '1', 2, 800, 1600),
(12, 's_20240708_12348', '2', 5, 160, 800),
(13, 's_20240708_12348', '3', 3, 80, 240),
(14, 's_20240708_12349', '4', 3, 240, 720),
(15, 's_20240708_12349', '5', 1, 640, 640),
(16, 's_20240708_12349', '6', 2, 640, 1280),
(17, 's_20240708_12349', '7', 1, 640, 640),
(18, 's_20240708_12349', '8', 3, 80, 240),
(19, 's_20240708_12350', '9', 2, 800, 1600),
(20, 's_20240708_12350', '10', 5, 160, 800),
(21, 's_20240708_12351', '1', 2, 800, 1600),
(22, 's_20240708_12351', '2', 5, 160, 800),
(23, 's_20240708_12351', '3', 3, 80, 240),
(24, 's_20240708_12352', '4', 3, 240, 720),
(25, 's_20240708_12352', '5', 1, 640, 640),
(26, 's_20240708_12352', '6', 2, 640, 1280),
(27, 's_20240708_12352', '7', 1, 640, 640),
(28, 's_20240708_12352', '8', 3, 80, 240),
(29, 's_20240708_12353', '9', 2, 800, 1600),
(30, 's_20240708_12353', '10', 5, 160, 800),
(31, 's_20240708_12354', '1', 2, 800, 1600),
(32, 's_20240708_12354', '2', 5, 160, 800),
(33, 's_20240708_12354', '3', 3, 80, 240),
(34, 's_20240708_12355', '4', 3, 240, 720),
(35, 's_20240708_12355', '5', 1, 640, 640),
(36, 's_20240708_12355', '6', 2, 640, 1280),
(37, 's_20240708_12355', '7', 1, 640, 640),
(38, 's_20240708_12355', '8', 3, 80, 240),
(39, 's_20240708_12356', '9', 2, 800, 1600),
(40, 's_20240708_12356', '10', 5, 160, 800),
(41, 's_20240708_12357', '1', 2, 800, 1600),
(42, 's_20240708_12357', '2', 5, 160, 800),
(43, 's_20240708_12357', '3', 3, 80, 240),
(44, 's_20240708_12358', '4', 3, 240, 720),
(45, 's_20240708_12358', '5', 1, 640, 640),
(46, 's_20240708_12358', '6', 2, 640, 1280),
(47, 's_20240708_12358', '7', 1, 640, 640),
(48, 's_20240708_12358', '8', 3, 80, 240),
(49, 's_20240708_12359', '9', 2, 800, 1600),
(50, 's_20240708_12359', '10', 5, 160, 800);
-- --------------------------------------------------------
--
-- 資料表結構 `product_type`
--
CREATE TABLE `product_type` (
  `product_type_id` int(11) DEFAULT NULL,
  `product_type` varchar(12) DEFAULT NULL
)  ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `product_type`
--
INSERT INTO `product_type` (`product_type_id`, `product_type`) VALUES
(1, 'tool'),
(2, 'food'),
(3, 'tent'),
(4, 'flashlight'),
(5, 'sleeping_bag');

-- --------------------------------------------------------
-- 收藏存放的資料表
-- book
DROP TABLE IF EXISTS `book_like`;
CREATE TABLE `book_like`
(
  `b_like_id` INT NOT NULL AUTO_INCREMENT,
  `camp_type_id`  varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`b_like_id`),
  CONSTRAINT `FK_book_like` FOREIGN KEY (`camp_type_id`) REFERENCES `room`(`camp_type_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- event
DROP TABLE IF EXISTS `book_like`;
CREATE TABLE `book_like`
(
  `e_like_id` INT NOT NULL AUTO_INCREMENT,
  `event_id`  INT NOT NULL,
  PRIMARY KEY (`e_like_id`),
  CONSTRAINT `FK_event_like` FOREIGN KEY (`event_id`) REFERENCES `event_holding_list`(`event_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- product
DROP TABLE IF EXISTS `product_like`;
CREATE TABLE `product_like`
(
  `p_like_id` INT NOT NULL AUTO_INCREMENT,
    `product_id` INT NOT NULL,
  PRIMARY KEY (`p_like_id`),
  CONSTRAINT `FK_product_like` FOREIGN KEY (`product_id`) REFERENCES `books`(`product_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
