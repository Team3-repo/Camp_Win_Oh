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
-- 營地區域
DROP TABLE IF EXISTS `position`;
CREATE TABLE `position`
(
 `id` int NOT NULL AUTO_INCREMENT,
 `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  primary key(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `position` VALUES
(1, '北部'),
(2, '中部'),
(3, '南部'),
(4, '東部');

-- 露營地資訊
DROP TABLE IF EXISTS `campsites`;
CREATE TABLE `campsites` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sn` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `title` text DEFAULT NULL,
  `info` text DEFAULT NULL,
  `position` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `open_time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `campsites` (`id`, `sn`, `name`, `img`, `title`, `info`, `position`, `address`, `open_time`, `created_at`, `updated_at`) VALUES
(1, 'CampA01',  '山林樂活露營區', 'https://blogger.googleusercontent.com/img/a/AVvXsEiV_j5n4dleE--X4wszIfrGu4pmdvMOqQaj2ccD66KX7woBdB2kwqjFu_lXypdvc8OAIdtWnw5zv5VTaNqAU3iYOSenlV6QFWiFAXUy5491uNxiXkx1Xo7Q5lz9eev4WvZeyL-KJNC-u_laYfJVRK6UDhQaaHb51qtH9Ks51FBQeeY4pHpO97A2nCYjrYVC', '感受山林的靜謐與悠然，盡在山林樂活', '山林樂活露營區位於壯麗的太魯閣山脈之中，是一處讓人遠離塵囂、享受大自然的理想場所。這裡擁有優美的自然景觀和豐富的生態環境，適合各類露營愛好者。不論是喜愛探險的背包客，還是喜歡舒適享受的家庭旅行者，都能在這裡找到最適合的露營方式。', '東部', '台灣花蓮縣秀林鄉太魯閣村200號', '上午 9:00', '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(2, 'CampA02',  '森林之星露營地', 'https://blogger.googleusercontent.com/img/a/AVvXsEiRyE498AlTlH91EYdcJjazwpPuwikz6wZsAI1zO3au57G79fwi1jzFfjRJqYgq86Xe1OJIRAvFMbv7IvNxVzJMISePQIcf-mUCUa1FDmHkVLzcj6iDyNInBxHapIhI9_np2ZTws0i3FrgaRUDunVhip0wjH3-nUO2ywJsZECDyuWGeP02ACJ3FRYpNhXLh', '仰望星空，擁抱自然，讓心靈在綠意中閃耀', '森林之星露營地位於台灣中央山脈的腹地，擁有壯麗的山景和清新的空氣。營地提供多樣化的露營選項，從基本的帳篷區到配備齊全的小木屋，適合各種露營者。無論是親子旅遊、團體活動還是單獨冒險，這裡都是理想的選擇。', '中部', '台灣南投縣仁愛鄉翠峰村101號', '上午 9:20', '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(3, 'CampA03', '海洋之心露營區', 'https://blogger.googleusercontent.com/img/a/AVvXsEj8YVFb5gbNE2xlKiI5RYKQ2MRmT2Y7MUXrKG344Ev5XvmeJ0i7QSMJHZkEa_e28yIRzV7V28H2oZ7YP4vNnsuCvqvT9u02Ac96P6Yw-ErllGcuc4G_OGtqTBPw6_BbNFBiIFDEocHTYUP5KMoJ1DVLMPAZEgEhJ8dxNkja8_quLRxZgpqrOl_uSDEc5m9U', '在海浪聲中安靜入夢，感受海洋的魅力', '海洋之心露營區坐落於壯觀的太平洋海岸，擁有無敵海景與柔軟沙灘。這裡提供舒適的營位選擇，讓露營者可以在星空下享受海風，並沉浸於自然之中。無論是想要享受陽光的家庭，還是尋找靜謐的獨行客，這裡都是最佳的露營目的地。', '東部', '台灣台東縣成功鎮海邊路50號', '上午 8:30', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(4, 'CampA04', '山川之舞露營區', 'https://blogger.googleusercontent.com/img/a/AVvXsEitJxJb5gP1SjYnnI2p3E6iDUaiE4qQgTH2m5VFDeknXQew5IAhILMln5fZniSYUWtTDhmJjaEgGUEX01G-GY5jv_pXDknQlNc-ND54jNHZO8xUMi5RPobU56ZQRAlb4jrvy9XIBqNwTsse1ccPkePZo-LiP-SoYdvhy0RCCevsC5Q1QXnVGEUa-z7sBWQV', '在山野中與大自然共舞', '山川之舞露營區位於青翠的山脈之中，提供獨特的露營體驗。這裡的環境優美，非常適合徒步旅行和家庭聚會。無論是早晨的清新空氣還是夜晚的星空，您都能在這裡找到靈感。', '北部', '台灣宜蘭縣冬山鄉梅花村200號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(5, 'CampA05', '雲端之上露營區', 'https://blogger.googleusercontent.com/img/a/AVvXsEiYMsff5biSeJjk7J9d7C6iE9ZtgExadsgug72ODF0IGXpfUcDY2GQAe87FR0kEyNwSka2JPY0bKxEPvrbhdEi1EcynhdmqTM3uv1uN4oFqm8tHE_BOluN5FoVbI8j5JgQaJbS9xBexdTN3bizFbizXCSFOF1qXpAedxBycco7JjMi0Erorqd2VKzw1VAx9', '享受雲海與日出的奇妙', '雲端之上露營區位於高山之巔，是觀賞日出和雲海的最佳地點。露營者可以在此享受大自然的美麗，並進行各種戶外活動。', '中部', '台灣南投縣信義鄉大山村300號', '上午 6:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(6, 'CampA06', '日出海灘露營區', 'https://blogger.googleusercontent.com/img/a/AVvXsEgSxoUl8bmC96hCkdVyXDlU0FqhY8ZxORy1tMPefwoQeb2jfH1cb7te2BPON6ARa42JJaEuP9GK46Too31v0mJ4t6UHNdGEBBWjSP9jUYGaslCrvGGC2JpvU6e5iYsa2i9xvwVdm8UhEHRq_JSBb1OOlTl3BhTM06Q5QJTc0pOaKjBLg-mpjKU5Fss9kc6s', '在日出時刻沐浴海風', '日出海灘露營區提供無與倫比的海岸線和日出景觀，適合喜愛沙灘和海洋的露營者。這裡有多種活動可供選擇，從浮潛到沙灘排球，無論是家庭還是朋友聚會都非常適合。', '南部', '台灣高雄市旗津區沙灘路123號', '上午 7:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(7, 'CampA07', '秘境森林露營區', 'https://blogger.googleusercontent.com/img/a/AVvXsEiA0WlHbWzeK-el4QPcAUMyuvMUo10JxBFFKcuRN1T63r6YgukpMZ6odIL4TtRgHj325CYr6TvAJhlfdEoPOQnD4T4A_ZjYevK7xG69eRrE2dmear_OL5quLA-fPrYtSvVKzhO28lfj74JBDNP-k-gSoZ3zX6yAP_5bnCtn2VA1Qbp51nHBt0OPcaG5ra3g', '探索隱秘的自然寶藏', '秘境森林露營區隱藏在茂密的樹林中，讓露營者體驗真正的自然靜謐。這裡適合喜歡野生動物和自然探險的人士，並提供多樣的露營選擇。', '中部', '台灣南投縣仁愛鄉秘境村50號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(8, 'CampA08', '浪漫星空露營區', 'https://blogger.googleusercontent.com/img/a/AVvXsEjK1_Yl9azp2preio7tP_qJ-0KWRngGnhfGsMXgTWcOnjzhi0Axx9-gq2hk26Z6bD7oVuW11MU3lseh6SB2cEBSdXchQ16S1Uc_VQJsL-wPSvIUSafQgYCiFxcsLylDnlIKuDCa7dvAdVqZgg6ELsn6GDCBzvMHuPArhN0NsiMCQiyOeW99AtXArrDg8BYi', '在星空下享受浪漫', '浪漫星空露營區適合情侶和家庭，讓您在星空下共享美好時光。這裡提供各種設施，讓您可以安心享受露營的樂趣。', '東部', '台灣花蓮縣壽豐鄉浪漫路88號', '上午 8:30', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(9, 'CampA09', '溪畔露營區', 'https://blogger.googleusercontent.com/img/a/AVvXsEhu9gtgSvekBSP5UhmD8ZzMqP1tz8nxpi9pjNT7W4HfDw4QBqaioEpHRyKuQ4QeW3wasGYwvY3vqaL2-wyW3Pbb5FwYZdcJTpjwhUm4p3LZaURK_agsDzTDB2FznPtcMSZY43xfID_wA52c9d7LsjRO0fpZNK7MKs0WKtKzcSCej6e_9UoVe6s-9K5QnMxp', '在溪水旁享受清涼', '溪畔露營區提供近水的露營選擇，讓您在清涼的溪水旁放鬆心情。這裡有多樣的活動可以參加，非常適合親子和團體。', '北部', '台灣新北市瑞芳區溪邊村50號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(10, 'CampA10', '彩虹山谷露營區', 'https://blogger.googleusercontent.com/img/a/AVvXsEiFlT4nrgXeWcd8ex_8iXK3UAgdjrp8vTTPJg5FwSzVL4nXizHl1iwPxjJKxuEesfQdsi4HLc8-YMnJtNp6dWvDbaVokpOFJtxPM5Qn2xg44OZJQbAmYk0TmV7SaKZ3U9MqRJHD0kJ0EpPfX6XtFtsyPZ5CYY2wZzjsv984n9k98x2kkD1Fsxfg3ehcFTNi', '享受色彩斑斕的自然美景', '彩虹山谷露營區以其壯觀的山景和五彩繽紛的花卉而聞名，是拍攝自然照片的理想地點。', '中部', '台灣苗栗縣三灣鄉彩虹村60號', '上午 8:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(11, 'CampA11', '童話森林露營區', 'https://blogger.googleusercontent.com/img/a/AVvXsEhIeYqieTo3rmpG8xqFG3x_pduvUmdaddsbZlZ-qIdHtci7RSw4dpqB3KoJfwwc_XKdhz0BFbtYCXwXWGyvp8ZxdrAlUI6WO5y9OmsjxDSLFV21zVIF2o-vcEu9gJZRyqFT6EXdD6qjx6Lueo5vgvCZi3MTBtd9EWY1YhgAuLBLIYAg5CIXQv6pHZtiViGE', '走進童話般的世界', '童話森林露營區擁有如夢似幻的森林景色，適合家庭和小朋友來此露營，感受大自然的奇妙。', '中部', '台灣嘉義縣梅山鄉童話村80號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(12, 'CampA12', '湖邊休閒露營區', 'https://blogger.googleusercontent.com/img/a/AVvXsEggv5Zxz6OMku-S4LVO10fRrcjlMoCv3WIWihqg1e-xT-ykgqwQUMRal1cfHtOotFZvkPhIooqeVvnA6mInEIt_PV-Hf5pYsyBuqci8uvNw5X-7zwW1IFk0nvQDe8sCs4IqvHLcEk9INnx8AfccaynjwgjXabaCCr2uS5o1hPdAQCAXP28U2PrEnDOGRrww', '在湖邊享受悠閒的時光', '湖邊休閒露營區提供舒適的湖景和安靜的環境，非常適合放鬆和靜思。這裡的設施齊全，適合各種露營者。', '中部', '台灣台中市南區湖邊路100號', '上午 8:30', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(13, 'CampA13', '古道探險露營區', 'https://loremflickr.com/640/480', '挑戰自我，探索古道', '古道探險露營區適合喜歡挑戰和探險的人，這裡有豐富的自然景觀和古老的文化路線等著您來探索。', '北部', '台灣台北市北投區古道村50號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(14, 'CampA14', '幸福之谷露營區', 'https://loremflickr.com/640/480', '讓心靈在谷中獲得幸福', '幸福之谷露營區提供一個放鬆和享受自然的地方，讓每一位來訪者都能感受到幸福。', '南部', '台灣台南市南區幸福路90號', '上午 8:30', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(15, 'CampA15', '靜謐山谷露營區', 'https://loremflickr.com/640/480', '在山谷中享受靜謐', '靜謐山谷露營區適合尋找寧靜的露營者，這裡的環境安靜且美麗，提供放鬆心靈的絕佳場所。', '中部', '台灣澎湖縣馬公市山谷村30號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(16, 'CampA16', '飛翔露營區', 'https://loremflickr.com/640/480', '在空中感受自由', '飛翔露營區提供一個獨特的高空露營體驗，讓您在樹梢上享受大自然的美景。', '東部', '台灣花蓮縣吉安鄉飛翔村30號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(17, 'CampA17', '原始之地露營區', 'https://loremflickr.com/640/480', '回歸原始，體驗自然', '原始之地露營區提供一個近乎原始的露營環境，非常適合喜歡大自然的露營者。', '中部', '台灣雲林縣林內鄉原始村70號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(18, 'CampA18', '鄉村田野露營區', 'https://loremflickr.com/640/480', '在田野中享受鄉村生活', '鄉村田野露營區提供鄉村風光和田野景色，是體驗農村生活的好地方。', '中部', '台灣彰化縣田中鎮田野村40號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(19, 'CampA19', '青湖露營區', 'https://loremflickr.com/640/480', '享受青湖的美麗風光', '青湖露營區坐落於美麗的湖邊，提供多樣化的露營設施，適合家庭和朋友的聚會。', '北部', '台灣新竹縣新埔鎮青湖村20號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(20, 'CampA20', '月光溪谷露營區', 'https://loremflickr.com/640/480', '在月光下享受寧靜', '月光溪谷露營區提供一個浪漫而靜謐的露營環境，非常適合情侶和家庭。', '北部', '台灣新北市三峡區月光村50號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(21, 'CampA21', '綠意滿滿露營區', 'https://loremflickr.com/640/480', '沉浸在綠意中，享受大自然', '綠意滿滿露營區提供充滿生機的環境，非常適合親子和家庭聚會。這裡擁有多樣的活動和設施。', '中部', '台灣南投縣埔里鎮綠意村100號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(22, 'CampA22', '樹屋露營區', 'https://loremflickr.com/640/480', '在樹上感受自然的氣息', '樹屋露營區提供一個獨特的樹上露營體驗，讓露營者在高處享受大自然的美好。', '中部', '台灣嘉義縣中埔鄉樹屋村80號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(23, 'CampA23', '清涼河畔露營區', 'https://loremflickr.com/640/480', '在清澈的河邊享受清涼', '清涼河畔露營區提供靠近河流的露營設施，讓您在清澈的水邊放鬆心情。', '東部', '台灣台東縣卑南鄉河畔村70號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(24, 'CampA24', '夢幻谷露營區', 'https://loremflickr.com/640/480', '在夢幻般的谷地中沉醉', '夢幻谷露營區以其壯觀的自然景觀和獨特的生態系統而聞名，適合各類型的露營者。', '中部', '台灣澎湖縣白沙鄉夢幻村20號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(25, 'CampA25', '花海露營區', 'https://loremflickr.com/640/480', '在花海中享受色彩繽紛的自然', '花海露營區擁有壯觀的花田，適合拍照和享受自然，這裡是春天的最佳露營地點。', '東部', '台灣花蓮縣花蓮市花海村100號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(26, 'CampA26', '蜿蜒溪流露營區', 'https://loremflickr.com/640/480', '在溪流旁享受悠閒的時光', '蜿蜒溪流露營區提供靜謐的環境和清澈的溪流，非常適合家庭和團體聚會。', '南部', '台灣高雄市左營區溪流村40號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(27, 'CampA27', '山林樂園露營區', 'https://loremflickr.com/640/480', '在山林中與自然共融', '山林樂園露營區是一個充滿自然氛圍的地方，非常適合各類露營者。這裡提供豐富的自然景觀和多樣的活動。', '北部', '台灣台北市士林區樂園村100號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(28, 'CampA28', '遠足山谷露營區', 'https://loremflickr.com/640/480', '在山谷中遠足，享受自然', '遠足山谷露營區擁有壯觀的自然景觀，是遠足愛好者的理想地點。這裡提供多樣的露營選擇，適合各種露營者。', '北部', '台灣台北市士林區遠足村100號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(29, 'CampA29', '田園風光露營區', 'https://loremflickr.com/640/480', '享受田園的恬靜', '田園風光露營區提供美麗的田野景觀，讓您在自然中放鬆心情。這裡適合家庭和朋友聚會。', '南部', '台灣台南市南區田園村80號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(30, 'CampA30', '秘境之地露營區', 'https://loremflickr.com/640/480', '發現隱藏的美麗', '秘境之地露營區是一個安靜的露營選擇，適合喜愛探索的露營者。這裡有豐富的自然資源和活動。', '北部', '台灣新北市三峽區秘境村50號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(31, 'CampA31', '竹林山莊露營區', 'https://loremflickr.com/640/480', '在竹林中享受寧靜', '竹林山莊露營區提供一個與竹林親密接觸的機會，讓您在靜謐的環境中放鬆心情。', '中部', '台灣苗栗縣竹南鎮竹林村60號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(32, 'CampA32', '湖邊露營區', 'https://loremflickr.com/640/480', '在湖邊享受陽光', '湖邊露營區提供舒適的環境和美麗的湖景，非常適合家庭旅遊。這裡有豐富的活動可供參加。', '北部', '台灣台北市淡水區湖邊村30號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(33, 'CampA33', '露營者天堂', 'https://loremflickr.com/640/480', '探索露營的樂趣', '露營者天堂提供各種設施，適合初學者和經驗豐富的露營者。這裡有美麗的自然景觀和多樣的活動。', '南部', '台灣台南市北區露營村90號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(34, 'CampA34', '綠樹成蔭露營區', 'https://loremflickr.com/640/480', '在樹影下享受清涼', '綠樹成蔭露營區適合喜愛自然的露營者，這裡的環境優美，讓您在樹蔭下放鬆心情。', '南部', '台灣高雄市前鎮區綠樹村40號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(35, 'CampA35', '黃昏山谷露營區', 'https://loremflickr.com/640/480', '在黃昏時刻享受寧靜', '黃昏山谷露營區是觀賞日落的最佳地點，讓您在美麗的黃昏中放鬆身心。', '北部', '台灣宜蘭縣大同鄉黃昏村20號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(36, 'CampA36', '童趣森林露營區', 'https://loremflickr.com/640/480', '讓孩子在大自然中嬉戲', '童趣森林露營區專為家庭設計，提供安全且有趣的環境，讓孩子在大自然中探索和學習。', '北部', '台灣新竹縣五峰鄉童趣村10號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(37, 'CampA37', '自然探險露營區', 'https://loremflickr.com/640/480', '體驗與自然的親密接觸', '自然探險露營區提供各種探險活動，讓您在大自然中挑戰自我，非常適合喜愛冒險的露營者。', '中', '台灣南投縣草屯鎮自然村80號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(38, 'CampA38', '水岸露營區', 'https://loremflickr.com/640/480', '在水邊享受悠閒的時光', '水岸露營區提供美麗的水邊景觀，非常適合家庭和朋友的聚會，讓您享受大自然的放鬆時光。', '東部', '台灣台東縣水岸村60號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(39, 'CampA39', '海邊浪漫露營區', 'https://loremflickr.com/640/480', '享受海浪和微風', '海邊浪漫露營區提供迷人的海景和舒適的環境，是情侶和家庭的理想選擇。', '北部', '台灣基隆市七堵區海邊村30號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(40, 'CampA40', '幸福小鎮露營區', 'https://loremflickr.com/640/480', '在小鎮中找到幸福', '幸福小鎮露營區提供一個舒適的環境，讓每位來訪者都能感受到幸福與快樂。', '南部', '台灣台南市南區小鎮村20號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(41, 'CampA41', '陽光灑落露營區', 'https://loremflickr.com/640/480', '在陽光下享受生活', '陽光灑落露營區擁有美麗的陽光景觀，讓您在戶外活動中充分享受生活的美好。', '中部', '台灣南投縣集集鎮陽光村80號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(42, 'CampA42', '古樹露營區', 'https://loremflickr.com/640/480', '在古樹下享受歷史', '古樹露營區提供與古老樹木親密接觸的機會，讓您在歷史的環境中放鬆心情。', '中部', '台灣雲林縣斗六市古樹村70號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(43, 'CampA43', '晨曦露營區', 'https://loremflickr.com/640/480', '在晨曦中醒來', '晨曦露營區是一個適合晨跑者和喜愛清晨的露營者的地點，讓您在大自然的懷抱中迎接新的一天。', '中部', '台灣嘉義縣大林鎮晨曦村40號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(44, 'CampA44', '魔法森林露營區', 'https://loremflickr.com/640/480', '探索魔法般的自然', '魔法森林露營區是一個充滿奇幻色彩的露營地點，適合各類露營者，讓您在大自然中找到靈感。', '南部', '台灣屏東縣滿州鄉魔法村30號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(45, 'CampA45', '和諧天地露營區', 'https://loremflickr.com/640/480', '享受和諧的自然氛圍', '和諧天地露營區提供安靜和諧的環境，非常適合放鬆身心，是一個理想的露營地點。', '北部', '台灣新竹縣竹北市和諧村20號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(46, 'CampA46', '平靜湖泊露營區', 'https://loremflickr.com/640/480', '在平靜的湖泊旁放鬆', '平靜湖泊露營區提供一個安靜的湖邊環境，讓您遠離城市的喧囂，享受放鬆時光。', '中部', '台灣台中市南區平靜村80號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(47, 'CampA47', '情侶特區露營區', 'https://loremflickr.com/640/480', '為愛而生的露營區', '情侶特區露營區專為情侶設計，提供浪漫的環境和獨特的體驗，是慶祝愛情的最佳選擇。', '南部', '台灣高雄市鼓山區情侶村30號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(48, 'CampA48', '自然風光露營區', 'https://loremflickr.com/640/480', '欣賞自然之美', '自然風光露營區提供壯麗的自然景觀，適合喜愛大自然的露營者，這裡有多樣的活動可供選擇。', '北部', '台灣桃園市桃園區自然村50號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(49, 'CampA49', '晨光露營區', 'https://loremflickr.com/640/480', '在晨光中迎接新的一天', '晨光露營區提供寧靜的環境和美麗的晨景，適合喜愛早起的露營者。', '中部', '台灣南投縣水里鄉晨光村70號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22'),
(50, 'CampA50', '遺忘之地露營區', 'https://loremflickr.com/640/480', '發現被遺忘的美麗', '遺忘之地露營區是一個靜謐的地方，適合喜愛孤獨與思考的露營者，這裡的自然景觀讓人放鬆。', '南部', '台灣台南市東區遺忘村10號', '上午 9:00', '2024-09-29 10:44:22', '2024-09-29 10:44:22');

-- 住宿分類
DROP TABLE IF EXISTS `camping_category`;
CREATE TABLE `camping_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `camping_category` (`id`, `name`, `parent_id`, `created_at`, `updated_at`) VALUES
(1, '露營車', NULL, '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(2, '小木屋', NULL, '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(3, '帳篷', NULL, '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(4, '家庭型營位', 1, '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(5, '標準型營位', 1, '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(6, '豪華型營位', 1, '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(7, '家庭型營位', 2, '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(8, '標準型營位', 2, '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(9, '豪華型營位', 2, '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(10, '家庭型營位', 3, '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(11, '標準型營位', 3, '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(12, '豪華型營位', 3, '2024-09-02 10:44:22', '2024-09-02 10:44:22');

-- 營區特色
DROP TABLE IF EXISTS `Feature`;
CREATE TABLE `Feature` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `Feature` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, '寵物友善', '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(2, '交通易達', '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(3, '網美佈置', '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(4, '星空夜景', '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(5, '雲海美景', '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(6, '親子活動', '2024-09-02 10:44:22', '2024-09-02 10:44:22');

-- 營區設施
DROP TABLE IF EXISTS `Facilities`;
CREATE TABLE `Facilities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `Facilities` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, '衛浴', '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(2, '餐廳', '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(3, '商店', '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(4, '無障礙', '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(5, '投幣洗衣', '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(6, '親子設施', '2024-09-02 10:44:22', '2024-09-02 10:44:22');

-- 房型方案
CREATE TABLE `booking_type` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `sn` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `campsites_id` int(11) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `photos` text DEFAULT NULL,
  `stock` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `info` text DEFAULT NULL,
  `bed_opt` varchar(255) DEFAULT NULL,
  `max_per` int(11) DEFAULT NULL,
  `food` varchar(255) DEFAULT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO `booking_type` (`id`, `sn`, `name`, `campsites_id`, `cat_id`, `photos`, `stock`, `price`, `info`, `bed_opt`, `max_per`, `food`, `created_at`, `updated_at`) VALUES
(1, 'RTC01B04', '標準型營位｜帳篷', 1, 11, 'https://blogger.googleusercontent.com/img/a/AVvXsEjFBjXeGI45uwfWzs-PTlA_LZcb5EOUpj-mGBnJAL3Z8F1A5ANa3p6N8XRWjnvHmc8Da3ODZYcldbjKDDcMX5Naaa_Oa2R9vSh07ZP5-D5OUs1wS-wv7Ed53am3CcwUqkknzs73vEfOnzFBYyld4iELY9Xc11yup8EA_LOBuTr53vlG3TbONgX0E5Q9WnUr', '40', 1200, '位於營區中心地帶，交通便利，提供基本設施，適合初次露營者或小型團體。讓您輕鬆享受露營樂趣，同時感受自然的魅力', '1張雙人床和2個睡墊', 4, '無附餐', '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(2, 'RTC01B05', '家庭型營位｜帳篷', 1, 10, 'https://blogger.googleusercontent.com/img/a/AVvXsEj87Ywtt6hu0yS03z90s88u8FbMzWg4NZ7-eARV8gNaCLrDu_HSNHbr-eFe5h7FFbrgAMmtS-Z9tSVPo29krvLMzPoxbECa3JvORtgbCh5S5Ahy-_i3X9ORHuZ_-x22MD_14Io8A31G9i24DbSeYAp3uRtFG55xmAZOZQWE_wr78UIbxmg5ZY_k_OMqUAES', '25', 2000, '提供更寬敞的空間，適合家庭聚會或多代同堂露營。帳篷內部設施齊全，並提供舒適的休憩區域，讓全家人在戶外也能感受到家的溫馨', '帳篷內有1張雙人床和2張單人床，額外提供睡墊', 6, '附午餐', '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(3, 'RTC01B06', '豪華型營位｜帳篷', 1, 12, 'https://blogger.googleusercontent.com/img/a/AVvXsEimgWX2W2B6UAxXCwLJ69MYOoXWEutSplPH-LKDdHleiu0WHqE6nxUtD_GPhtawYR600C37WoJv9pRg_ZXphOLIXFpuuTdUSsfMQhR44AyQg5qfui0Pn0t5RErJMROzazjf4XInvKvR19DqEFqqDWwhoclfcUZGjBD5G-uexXFUQQJs33mGTTrT7VuUxf5f', '15', 3500, '提供更高端的設施，讓您在大自然中享受如同酒店般的舒適體驗。營位周邊環境優美，適合浪漫度假或高端露營需求', '1張大號雙人床和1張沙發床', 4, '附全餐', '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(4, 'RTC01T04', '標準型營位｜小木屋', 1, 8, 'https://blogger.googleusercontent.com/img/a/AVvXsEgSkc1QToAAaS8UD5Spd68MtkNMQG9tXh1EB5PrjKavBYkjC-Gfb3WtuQuz1OevCZkDZ_gfoe_vRCKeIDAeMWomaxMltxGmuWYH08T2I31yG3_EVr67vYl4ojGReNQ1Im3V98LqygMIt6hAKd_H9xksSN4rKPXZn-79Y7m20_mko42sRecfg9P8fMit6k2y', '30', 3500, '提供基本的住宿設施，適合希望在大自然中享受簡單舒適生活的旅客。位於營地中心，方便前往公共設施', '1張雙人床 + 2張單人床', 4, '附午餐', '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(5, 'RTC01T05', '家庭型營位｜小木屋', 1, 7, 'https://blogger.googleusercontent.com/img/a/AVvXsEig-DWGoXP6LfQGBUQZLW9b8hNDSvO2NWz5ZiYz_lvRm4ykyoPdICkcT8en-RQ7C-poIAIC09E7sNC6nFShOTSdC41hBdCMKiXF4RIdDT4BpacH8_zrKGR-XC0q3VZwcUQwHUtT0MobzEWpI2aWWcLnGpTI2KGLMb2sMCHSSNdAMCBSq1milbNl2VtXUoIa', '23', 5800, '專為多人口家庭設計，提供更大的居住空間和額外的睡眠區域。這裡是大家庭或多代同堂露營的最佳選擇，能夠讓所有成員在舒適中享受美好時光', '1張大號雙人床 + 2張單人床 + 1張沙發床', 6, '附全餐', '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(6, 'RTC01T06', '豪華型營位｜小木屋', 1, 9, 'https://blogger.googleusercontent.com/img/a/AVvXsEi2xMYdF16PiAGDXDqmbyN9unzSahdJhUXVQWYxmWhd7iXA4YDSb5l4pWJcwYeyIasVY2jZlvi5RVx1_KgxRGSpjx5qgFuv0xHaMW18Us1VwkmfW3fK2400L37Sj_cKW-SE3mZcIsCnMOqZ58FF7yWQTUn7DxFwHxc_zQQZgN9bVb9Oq5NIR8vZ2sQDeGfb', '13', 4800, '位於營地的景觀區，提供更高端的住宿體驗。內部空間寬敞，並配有舒適的家具和現代化設施，適合尋求更奢華露營體驗的客人', '1張大號雙人床 + 1張雙層床', 4, '附全餐', '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(7, 'RTC01C04', '標準型營位｜露營車', 1, 5, 'https://blogger.googleusercontent.com/img/a/AVvXsEgChQkqqivrt4UXzBtbNTWFwFypB3xs_terjGSyxft4-AwF4paQ3WoTIF-FSPI9KHGReRf76jPAsZY2i4rqZWm62-uTQDpLEN7bls4YzqlnveAbCUU4LPu2KUlXiwGz31drUyFmwqxRtyp2UScg3IjCDLAeFIJiOpe2D4K6JA25wvLfZyhHj1TTixTMfjLy', '15', 4000, '提供基本的舒適設施，適合第一次體驗露營車的旅客。這款露營車位於風景優美的地點，讓您在大自然中享受簡單而便利的戶外生活', '1張雙人床 + 1張雙層床', 4, '附晚餐', '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(8, 'RTC01C05', '家庭型營位｜露營車', 1, 4, 'https://blogger.googleusercontent.com/img/a/AVvXsEjWdoUoqh5_O-WhL9qtBrLBzGhgSJ0eoWQXAlwXpIl71YIf0sAcyu70391L5AZce86MZEYXCJ0sjhdU120zAuyujTiyhBLMTdSPXOhYqZjvyLR30ViiJORhpFmxgOzWuLMldKmxeBTuxd7Mbr0fH1FU4OHDE5H-QS4Sjz97EvXb7ODWXFvfneNkW_AUTq0h', '12', 6800, '專為多人設計為多人口家庭或團體提供更多空間和設施。這款露營車擁有額外的臥室和更大的起居區域，讓全家人都能在舒適中享受露營的樂趣', '1張大號雙人床 + 2張沙發床 + 1張上下鋪床', 6, '附全餐', '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(9, 'RTC01C06', '豪華型營位｜露營車', 1, 6, 'https://blogger.googleusercontent.com/img/a/AVvXsEgrIfGob4_0Y8yIfj_XdUhKs-VWBkuoeFRlUmJZZnGwFIq30zWD0NOOerhjV4k60-rF-bBFuRvR83pORw77fm8DZVkovNeDqiI3pktYKgCWHF8wZbP_tui50WxjteNBxRMJbGNBB0sWL4dHqdsWVzCDCYnjftJ9FRlenV0ge9lJO7VLqri9WgtiyDmwTWsf', '8', 5500, '配備高級設施，適合希望在露營中享受現代舒適生活的旅客。寬敞的內部設計和更高檔的設備，為您提供更愜意的露營體驗', '1張大號雙人床 + 1張沙發床 + 1張上下鋪床', 6, '附全餐', '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(10, 'RTC02C04', '家庭型營位｜露營車', 2, 4, 'https://blogger.googleusercontent.com/img/a/AVvXsEgChQkqqivrt4UXzBtbNTWFwFypB3xs_terjGSyxft4-AwF4paQ3WoTIF-FSPI9KHGReRf76jPAsZY2i4rqZWm62-uTQDpLEN7bls4YzqlnveAbCUU4LPu2KUlXiwGz31drUyFmwqxRtyp2UScg3IjCDLAeFIJiOpe2D4K6JA25wvLfZyhHj1TTixTMfjLy', 10, 3000, '適合家庭的露營車，提供舒適的住宿體驗', '1張雙人床 + 1張單人床', 4, '附早餐', '2024-09-29 10:00:00', '2024-09-29 10:00:00'),
(11, 'RTC02C05', '標準型營位｜露營車', 2, 5, 'https://blogger.googleusercontent.com/img/a/AVvXsEjWdoUoqh5_O-WhL9qtBrLBzGhgSJ0eoWQXAlwXpIl71YIf0sAcyu70391L5AZce86MZEYXCJ0sjhdU120zAuyujTiyhBLMTdSPXOhYqZjvyLR30ViiJORhpFmxgOzWuLMldKmxeBTuxd7Mbr0fH1FU4OHDE5H-QS4Sjz97EvXb7ODWXFvfneNkW_AUTq0h', 8, 4000, '標準型露營車提供舒適設施，適合中小家庭', '1張雙人床 + 1張沙發床', 4, '附早餐', '2024-09-29 10:00:00', '2024-09-29 10:00:00'),
(12, 'RTC02C06', '豪華型營位｜露營車', 2, 6, 'https://blogger.googleusercontent.com/img/a/AVvXsEgrIfGob4_0Y8yIfj_XdUhKs-VWBkuoeFRlUmJZZnGwFIq30zWD0NOOerhjV4k60-rF-bBFuRvR83pORw77fm8DZVkovNeDqiI3pktYKgCWHF8wZbP_tui50WxjteNBxRMJbGNBB0sWL4dHqdsWVzCDCYnjftJ9FRlenV0ge9lJO7VLqri9WgtiyDmwTWsf', 5, 5000, '豪華型露營車適合高端家庭或小團體', '1張大號雙人床 + 1張單人床', 4, '附全餐', '2024-09-29 10:00:00', '2024-09-29 10:00:00'),
(13, 'RTC02T04', '家庭型營位｜小木屋', 2, 7, 'https://blogger.googleusercontent.com/img/a/AVvXsEgSkc1QToAAaS8UD5Spd68MtkNMQG9tXh1EB5PrjKavBYkjC-Gfb3WtuQuz1OevCZkDZ_gfoe_vRCKeIDAeMWomaxMltxGmuWYH08T2I31yG3_EVr67vYl4ojGReNQ1Im3V98LqygMIt6hAKd_H9xksSN4rKPXZn-79Y7m20_mko42sRecfg9P8fMit6k2y', 6, 3500, '適合家庭的舒適小木屋，讓您享受大自然的同時有家的感覺', '1張雙人床 + 1張單人床', 3, '附早餐', '2024-09-29 10:00:00', '2024-09-29 10:00:00'),
(14, 'RTC02T05', '標準型營位｜小木屋', 2, 8, 'https://blogger.googleusercontent.com/img/a/AVvXsEig-DWGoXP6LfQGBUQZLW9b8hNDSvO2NWz5ZiYz_lvRm4ykyoPdICkcT8en-RQ7C-poIAIC09E7sNC6nFShOTSdC41hBdCMKiXF4RIdDT4BpacH8_zrKGR-XC0q3VZwcUQwHUtT0MobzEWpI2aWWcLnGpTI2KGLMb2sMCHSSNdAMCBSq1milbNl2VtXUoIa', 4, 4500, '標準型小木屋提供現代化設施，適合家庭或小型團體', '1張雙人床', 3, '附早餐', '2024-09-29 10:00:00', '2024-09-29 10:00:00'),
(15, 'RTC02T06', '豪華型營位｜小木屋', 2, 9, 'https://blogger.googleusercontent.com/img/a/AVvXsEi2xMYdF16PiAGDXDqmbyN9unzSahdJhUXVQWYxmWhd7iXA4YDSb5l4pWJcwYeyIasVY2jZlvi5RVx1_KgxRGSpjx5qgFuv0xHaMW18Us1VwkmfW3fK2400L37Sj_cKW-SE3mZcIsCnMOqZ58FF7yWQTUn7DxFwHxc_zQQZgN9bVb9Oq5NIR8vZ2sQDeGfb', 3, 6000, '豪華型小木屋提供高端設施和獨立空間', '1張大號雙人床 + 1張沙發床', 4, '附全餐', '2024-09-29 10:00:00', '2024-09-29 10:00:00'),
(16, 'RTC02B04', '家庭型營位｜帳篷', 2, 10, 'https://blogger.googleusercontent.com/img/a/AVvXsEjFBjXeGI45uwfWzs-PTlA_LZcb5EOUpj-mGBnJAL3Z8F1A5ANa3p6N8XRWjnvHmc8Da3ODZYcldbjKDDcMX5Naaa_Oa2R9vSh07ZP5-D5OUs1wS-wv7Ed53am3CcwUqkknzs73vEfOnzFBYyld4iELY9Xc11yup8EA_LOBuTr53vlG3TbONgX0E5Q9WnUr', 12, 2500, '適合家庭的帳篷，提供露營的樂趣與舒適的環境', '1張雙人床', 4, '附早餐', '2024-09-29 10:00:00', '2024-09-29 10:00:00'),
(17, 'RTC02B05', '標準型營位｜帳篷', 2, 11, 'https://blogger.googleusercontent.com/img/a/AVvXsEj87Ywtt6hu0yS03z90s88u8FbMzWg4NZ7-eARV8gNaCLrDu_HSNHbr-eFe5h7FFbrgAMmtS-Z9tSVPo29krvLMzPoxbECa3JvORtgbCh5S5Ahy-_i3X9ORHuZ_-x22MD_14Io8A31G9i24DbSeYAp3uRtFG55xmAZOZQWE_wr78UIbxmg5ZY_k_OMqUAES', 10, 3500, '標準型帳篷提供較佳的住宿體驗，適合小家庭', '1張雙人床', 3, '附早餐', '2024-09-29 10:00:00', '2024-09-29 10:00:00'),
(18, 'RTC02B06', '豪華型營位｜帳篷', 2, 12, 'https://blogger.googleusercontent.com/img/a/AVvXsEimgWX2W2B6UAxXCwLJ69MYOoXWEutSplPH-LKDdHleiu0WHqE6nxUtD_GPhtawYR600C37WoJv9pRg_ZXphOLIXFpuuTdUSsfMQhR44AyQg5qfui0Pn0t5RErJMROzazjf4XInvKvR19DqEFqqDWwhoclfcUZGjBD5G-uexXFUQQJs33mGTTrT7VuUxf5f', 8, 4500, '豪華型帳篷提供極致舒適的戶外體驗', '1張大號雙人床', 2, '附全餐', '2024-09-29 10:00:00', '2024-09-29 10:00:00'),
(19, 'RTC03C01', '家庭型營位｜露營車', 3, 4, 'https://blogger.googleusercontent.com/img/a/AVvXsEgChQkqqivrt4UXzBtbNTWFwFypB3xs_terjGSyxft4-AwF4paQ3WoTIF-FSPI9KHGReRf76jPAsZY2i4rqZWm62-uTQDpLEN7bls4YzqlnveAbCUU4LPu2KUlXiwGz31drUyFmwqxRtyp2UScg3IjCDLAeFIJiOpe2D4K6JA25wvLfZyhHj1TTixTMfjLy', 10, 10200, '為家庭旅遊設計的舒適露營車', '1張雙人床 + 2張單人床', 6, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(20, 'RTC03C02', '標準型營位｜露營車', 3, 5, 'https://blogger.googleusercontent.com/img/a/AVvXsEjWdoUoqh5_O-WhL9qtBrLBzGhgSJ0eoWQXAlwXpIl71YIf0sAcyu70391L5AZce86MZEYXCJ0sjhdU120zAuyujTiyhBLMTdSPXOhYqZjvyLR30ViiJORhpFmxgOzWuLMldKmxeBTuxd7Mbr0fH1FU4OHDE5H-QS4Sjz97EvXb7ODWXFvfneNkW_AUTq0h', 8, 10800, '標準露營車，提供實用的居住空間', '1張雙人床 + 1張沙發床', 4, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(21, 'RTC03C03', '豪華型營位｜露營車', 3, 6, 'https://blogger.googleusercontent.com/img/a/AVvXsEgrIfGob4_0Y8yIfj_XdUhKs-VWBkuoeFRlUmJZZnGwFIq30zWD0NOOerhjV4k60-rF-bBFuRvR83pORw77fm8DZVkovNeDqiI3pktYKgCWHF8wZbP_tui50WxjteNBxRMJbGNBB0sWL4dHqdsWVzCDCYnjftJ9FRlenV0ge9lJO7VLqri9WgtiyDmwTWsf', 6, 15000, '豪華露營車，享受高端的露營體驗', '1張大號雙人床', 3, '附全餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(22, 'RTC03T01', '家庭型營位｜小木屋', 3, 7, 'https://blogger.googleusercontent.com/img/a/AVvXsEgSkc1QToAAaS8UD5Spd68MtkNMQG9tXh1EB5PrjKavBYkjC-Gfb3WtuQuz1OevCZkDZ_gfoe_vRCKeIDAeMWomaxMltxGmuWYH08T2I31yG3_EVr67vYl4ojGReNQ1Im3V98LqygMIt6hAKd_H9xksSN4rKPXZn-79Y7m20_mko42sRecfg9P8fMit6k2y', 12, 9100, '適合全家的溫馨小木屋', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(23, 'RTC03T02', '標準型營位｜小木屋', 3, 8, 'https://blogger.googleusercontent.com/img/a/AVvXsEig-DWGoXP6LfQGBUQZLW9b8hNDSvO2NWz5ZiYz_lvRm4ykyoPdICkcT8en-RQ7C-poIAIC09E7sNC6nFShOTSdC41hBdCMKiXF4RIdDT4BpacH8_zrKGR-XC0q3VZwcUQwHUtT0MobzEWpI2aWWcLnGpTI2KGLMb2sMCHSSNdAMCBSq1milbNl2VtXUoIa', 10, 9600, '舒適小木屋，為您的假期提供完美的住宿', '1張雙人床 + 1張單人床', 4, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(24, 'RTC03T03', '豪華型營位｜小木屋', 3, 9, 'https://blogger.googleusercontent.com/img/a/AVvXsEi2xMYdF16PiAGDXDqmbyN9unzSahdJhUXVQWYxmWhd7iXA4YDSb5l4pWJcwYeyIasVY2jZlvi5RVx1_KgxRGSpjx5qgFuv0xHaMW18Us1VwkmfW3fK2400L37Sj_cKW-SE3mZcIsCnMOqZ58FF7yWQTUn7DxFwHxc_zQQZgN9bVb9Oq5NIR8vZ2sQDeGfb', 8, 16500, '奢華小木屋，帶來獨特的住宿體驗', '1張大號雙人床', 3, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(25, 'RTC03B01', '家庭型營位｜帳篷', 3, 10, 'https://blogger.googleusercontent.com/img/a/AVvXsEjFBjXeGI45uwfWzs-PTlA_LZcb5EOUpj-mGBnJAL3Z8F1A5ANa3p6N8XRWjnvHmc8Da3ODZYcldbjKDDcMX5Naaa_Oa2R9vSh07ZP5-D5OUs1wS-wv7Ed53am3CcwUqkknzs73vEfOnzFBYyld4iELY9Xc11yup8EA_LOBuTr53vlG3TbONgX0E5Q9WnUr', 10, 8500, '適合家庭使用的寬敞帳篷', '1張雙人床 + 2張單人床', 5, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(26, 'RTC03B02', '標準型營位｜帳篷', 3, 11, 'https://blogger.googleusercontent.com/img/a/AVvXsEj87Ywtt6hu0yS03z90s88u8FbMzWg4NZ7-eARV8gNaCLrDu_HSNHbr-eFe5h7FFbrgAMmtS-Z9tSVPo29krvLMzPoxbECa3JvORtgbCh5S5Ahy-_i3X9ORHuZ_-x22MD_14Io8A31G9i24DbSeYAp3uRtFG55xmAZOZQWE_wr78UIbxmg5ZY_k_OMqUAES', 9, 8800, '舒適標準帳篷，完美的戶外選擇', '1張雙人床', 3, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(27, 'RTC03B03', '豪華型營位｜帳篷', 3, 12, 'https://blogger.googleusercontent.com/img/a/AVvXsEimgWX2W2B6UAxXCwLJ69MYOoXWEutSplPH-LKDdHleiu0WHqE6nxUtD_GPhtawYR600C37WoJv9pRg_ZXphOLIXFpuuTdUSsfMQhR44AyQg5qfui0Pn0t5RErJMROzazjf4XInvKvR19DqEFqqDWwhoclfcUZGjBD5G-uexXFUQQJs33mGTTrT7VuUxf5f', 8, 13000, '奢華帳篷，讓您享受戶外的同時擁有高端服務', '1張大號雙人床', 2, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(28, 'RTC04C01', '家庭型營位｜露營車', 4, 4, 'https://blogger.googleusercontent.com/img/a/AVvXsEgChQkqqivrt4UXzBtbNTWFwFypB3xs_terjGSyxft4-AwF4paQ3WoTIF-FSPI9KHGReRf76jPAsZY2i4rqZWm62-uTQDpLEN7bls4YzqlnveAbCUU4LPu2KUlXiwGz31drUyFmwqxRtyp2UScg3IjCDLAeFIJiOpe2D4K6JA25wvLfZyhHj1TTixTMfjLy', 9, 15000, '適合家庭的露營車，擁有寬敞的內部空間', '1張雙人床 + 2張單人床', 6, '附早餐', '2024-09-29 18:00:00', '2024-09-29 18:00:00'),
(29, 'RTC04C02', '標準型營位｜露營車', 4, 5, 'https://blogger.googleusercontent.com/img/a/AVvXsEjWdoUoqh5_O-WhL9qtBrLBzGhgSJ0eoWQXAlwXpIl71YIf0sAcyu70391L5AZce86MZEYXCJ0sjhdU120zAuyujTiyhBLMTdSPXOhYqZjvyLR30ViiJORhpFmxgOzWuLMldKmxeBTuxd7Mbr0fH1FU4OHDE5H-QS4Sjz97EvXb7ODWXFvfneNkW_AUTq0h', 8, 14000, '適合小家庭或情侶的標準露營車', '1張雙人床', 4, '附早餐和晚餐', '2024-09-29 18:00:00', '2024-09-29 18:00:00'),
(30, 'RTC04C03', '豪華型營位｜露營車', 4, 6, 'https://blogger.googleusercontent.com/img/a/AVvXsEgrIfGob4_0Y8yIfj_XdUhKs-VWBkuoeFRlUmJZZnGwFIq30zWD0NOOerhjV4k60-rF-bBFuRvR83pORw77fm8DZVkovNeDqiI3pktYKgCWHF8wZbP_tui50WxjteNBxRMJbGNBB0sWL4dHqdsWVzCDCYnjftJ9FRlenV0ge9lJO7VLqri9WgtiyDmwTWsf', 6, 23000, '豪華露營車，提供高端設施與私人空間', '1張大號雙人床', 3, '附全餐', '2024-09-29 18:00:00', '2024-09-29 18:00:00'),
(31, 'RTC04T01', '家庭型營位｜小木屋', 4, 7, 'https://blogger.googleusercontent.com/img/a/AVvXsEgSkc1QToAAaS8UD5Spd68MtkNMQG9tXh1EB5PrjKavBYkjC-Gfb3WtuQuz1OevCZkDZ_gfoe_vRCKeIDAeMWomaxMltxGmuWYH08T2I31yG3_EVr67vYl4ojGReNQ1Im3V98LqygMIt6hAKd_H9xksSN4rKPXZn-79Y7m20_mko42sRecfg9P8fMit6k2y', 10, 13000, '溫馨家庭小木屋，適合家人或團體入住', '1張雙人床 + 1張單人床', 5, '附早餐', '2024-09-29 18:00:00', '2024-09-29 18:00:00'),
(32, 'RTC04T02', '標準型營位｜小木屋', 4, 8, 'https://blogger.googleusercontent.com/img/a/AVvXsEig-DWGoXP6LfQGBUQZLW9b8hNDSvO2NWz5ZiYz_lvRm4ykyoPdICkcT8en-RQ7C-poIAIC09E7sNC6nFShOTSdC41hBdCMKiXF4RIdDT4BpacH8_zrKGR-XC0q3VZwcUQwHUtT0MobzEWpI2aWWcLnGpTI2KGLMb2sMCHSSNdAMCBSq1milbNl2VtXUoIa', 9, 12500, '適合小型家庭或朋友的標準小木屋', '1張雙人床', 4, '附早餐和燒烤晚餐', '2024-09-29 18:00:00', '2024-09-29 18:00:00'),
(33, 'RTC04T03', '豪華型營位｜小木屋', 4, 9, 'https://blogger.googleusercontent.com/img/a/AVvXsEi2xMYdF16PiAGDXDqmbyN9unzSahdJhUXVQWYxmWhd7iXA4YDSb5l4pWJcwYeyIasVY2jZlvi5RVx1_KgxRGSpjx5qgFuv0xHaMW18Us1VwkmfW3fK2400L37Sj_cKW-SE3mZcIsCnMOqZ58FF7yWQTUn7DxFwHxc_zQQZgN9bVb9Oq5NIR8vZ2sQDeGfb', 7, 24000, '豪華小木屋，提供頂級設施與景觀', '1張大號雙人床', 3, '附全餐', '2024-09-29 18:00:00', '2024-09-29 18:00:00'),
(34, 'RTC04B01', '家庭型營位｜帳篷', 4, 10, 'https://blogger.googleusercontent.com/img/a/AVvXsEjFBjXeGI45uwfWzs-PTlA_LZcb5EOUpj-mGBnJAL3Z8F1A5ANa3p6N8XRWjnvHmc8Da3ODZYcldbjKDDcMX5Naaa_Oa2R9vSh07ZP5-D5OUs1wS-wv7Ed53am3CcwUqkknzs73vEfOnzFBYyld4iELY9Xc11yup8EA_LOBuTr53vlG3TbONgX0E5Q9WnUr', 12, 12000, '適合家庭的舒適帳篷', '1張雙人床 + 2張單人床', 5, '附早餐', '2024-09-29 18:00:00', '2024-09-29 18:00:00'),
(35, 'RTC04B02', '標準型營位｜帳篷', 4, 11, 'https://blogger.googleusercontent.com/img/a/AVvXsEj87Ywtt6hu0yS03z90s88u8FbMzWg4NZ7-eARV8gNaCLrDu_HSNHbr-eFe5h7FFbrgAMmtS-Z9tSVPo29krvLMzPoxbECa3JvORtgbCh5S5Ahy-_i3X9ORHuZ_-x22MD_14Io8A31G9i24DbSeYAp3uRtFG55xmAZOZQWE_wr78UIbxmg5ZY_k_OMqUAES', 10, 11000, '適合情侶或小家庭的標準帳篷', '1張雙人床', 3, '附早餐和燒烤晚餐', '2024-09-29 18:00:00', '2024-09-29 18:00:00'),
(36, 'RTC04B03', '豪華型營位｜帳篷', 4, 12, 'https://blogger.googleusercontent.com/img/a/AVvXsEimgWX2W2B6UAxXCwLJ69MYOoXWEutSplPH-LKDdHleiu0WHqE6nxUtD_GPhtawYR600C37WoJv9pRg_ZXphOLIXFpuuTdUSsfMQhR44AyQg5qfui0Pn0t5RErJMROzazjf4XInvKvR19DqEFqqDWwhoclfcUZGjBD5G-uexXFUQQJs33mGTTrT7VuUxf5f', 8, 17000, '豪華帳篷，提供高端露營體驗', '1張大號雙人床', 2, '附全餐和私人服務', '2024-09-29 18:00:00', '2024-09-29 18:00:00'),
(37, 'RTC05C01', '家庭型營位｜露營車', 5, 4, 'https://blogger.googleusercontent.com/img/a/AVvXsEgChQkqqivrt4UXzBtbNTWFwFypB3xs_terjGSyxft4-AwF4paQ3WoTIF-FSPI9KHGReRf76jPAsZY2i4rqZWm62-uTQDpLEN7bls4YzqlnveAbCUU4LPu2KUlXiwGz31drUyFmwqxRtyp2UScg3IjCDLAeFIJiOpe2D4K6JA25wvLfZyhHj1TTixTMfjLy', 10, 10500, '舒適的家庭型露營車，適合家庭旅遊', '1張雙人床 + 2張單人床', 6, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(38, 'RTC05C02', '標準型營位｜露營車', 5, 5, 'https://blogger.googleusercontent.com/img/a/AVvXsEjWdoUoqh5_O-WhL9qtBrLBzGhgSJ0eoWQXAlwXpIl71YIf0sAcyu70391L5AZce86MZEYXCJ0sjhdU120zAuyujTiyhBLMTdSPXOhYqZjvyLR30ViiJORhpFmxgOzWuLMldKmxeBTuxd7Mbr0fH1FU4OHDE5H-QS4Sjz97EvXb7ODWXFvfneNkW_AUTq0h', 8, 11000, '實用的標準型露營車，為您提供舒適的住宿', '1張雙人床 + 1張沙發床', 4, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(39, 'RTC05C03', '豪華型營位｜露營車', 5, 6, 'https://blogger.googleusercontent.com/img/a/AVvXsEgrIfGob4_0Y8yIfj_XdUhKs-VWBkuoeFRlUmJZZnGwFIq30zWD0NOOerhjV4k60-rF-bBFuRvR83pORw77fm8DZVkovNeDqiI3pktYKgCWHF8wZbP_tui50WxjteNBxRMJbGNBB0sWL4dHqdsWVzCDCYnjftJ9FRlenV0ge9lJO7VLqri9WgtiyDmwTWsf', 6, 15500, '高端豪華露營車，享受奢華的露營體驗', '1張大號雙人床', 3, '附全餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(40, 'RTC05T01', '家庭型營位｜小木屋', 5, 7, 'https://blogger.googleusercontent.com/img/a/AVvXsEgSkc1QToAAaS8UD5Spd68MtkNMQG9tXh1EB5PrjKavBYkjC-Gfb3WtuQuz1OevCZkDZ_gfoe_vRCKeIDAeMWomaxMltxGmuWYH08T2I31yG3_EVr67vYl4ojGReNQ1Im3V98LqygMIt6hAKd_H9xksSN4rKPXZn-79Y7m20_mko42sRecfg9P8fMit6k2y', 12, 9500, '為家庭設計的溫馨小木屋', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(41, 'RTC05T02', '標準型營位｜小木屋', 5, 8, 'https://blogger.googleusercontent.com/img/a/AVvXsEig-DWGoXP6LfQGBUQZLW9b8hNDSvO2NWz5ZiYz_lvRm4ykyoPdICkcT8en-RQ7C-poIAIC09E7sNC6nFShOTSdC41hBdCMKiXF4RIdDT4BpacH8_zrKGR-XC0q3VZwcUQwHUtT0MobzEWpI2aWWcLnGpTI2KGLMb2sMCHSSNdAMCBSq1milbNl2VtXUoIa', 10, 9800, '標準小木屋，為您提供舒適的假期', '1張雙人床 + 1張單人床', 4, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(42, 'RTC05T03', '豪華型營位｜小木屋', 5, 9, 'https://blogger.googleusercontent.com/img/a/AVvXsEi2xMYdF16PiAGDXDqmbyN9unzSahdJhUXVQWYxmWhd7iXA4YDSb5l4pWJcwYeyIasVY2jZlvi5RVx1_KgxRGSpjx5qgFuv0xHaMW18Us1VwkmfW3fK2400L37Sj_cKW-SE3mZcIsCnMOqZ58FF7yWQTUn7DxFwHxc_zQQZgN9bVb9Oq5NIR8vZ2sQDeGfb', 8, 17000, '奢華的小木屋，讓您擁有獨特的住宿體驗', '1張大號雙人床', 3, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(43, 'RTC05B01', '家庭型營位｜帳篷', 5, 10, 'https://blogger.googleusercontent.com/img/a/AVvXsEjFBjXeGI45uwfWzs-PTlA_LZcb5EOUpj-mGBnJAL3Z8F1A5ANa3p6N8XRWjnvHmc8Da3ODZYcldbjKDDcMX5Naaa_Oa2R9vSh07ZP5-D5OUs1wS-wv7Ed53am3CcwUqkknzs73vEfOnzFBYyld4iELY9Xc11yup8EA_LOBuTr53vlG3TbONgX0E5Q9WnUr', 10, 8800, '適合全家的寬敞帳篷', '1張雙人床 + 2張單人床', 5, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(44, 'RTC05B02', '標準型營位｜帳篷', 5, 11, 'https://blogger.googleusercontent.com/img/a/AVvXsEj87Ywtt6hu0yS03z90s88u8FbMzWg4NZ7-eARV8gNaCLrDu_HSNHbr-eFe5h7FFbrgAMmtS-Z9tSVPo29krvLMzPoxbECa3JvORtgbCh5S5Ahy-_i3X9ORHuZ_-x22MD_14Io8A31G9i24DbSeYAp3uRtFG55xmAZOZQWE_wr78UIbxmg5ZY_k_OMqUAES', 9, 9100, '舒適標準帳篷，適合戶外活動', '1張雙人床', 3, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(45, 'RTC05B03', '豪華型營位｜帳篷', 5, 12, 'https://blogger.googleusercontent.com/img/a/AVvXsEimgWX2W2B6UAxXCwLJ69MYOoXWEutSplPH-LKDdHleiu0WHqE6nxUtD_GPhtawYR600C37WoJv9pRg_ZXphOLIXFpuuTdUSsfMQhR44AyQg5qfui0Pn0t5RErJMROzazjf4XInvKvR19DqEFqqDWwhoclfcUZGjBD5G-uexXFUQQJs33mGTTrT7VuUxf5f', 8, 13500, '奢華帳篷，提供獨特的戶外住宿體驗', '1張大號雙人床', 2, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(46, 'RTC06C01', '家庭型營位｜露營車', 6, 4, 'https://blogger.googleusercontent.com/img/a/AVvXsEgChQkqqivrt4UXzBtbNTWFwFypB3xs_terjGSyxft4-AwF4paQ3WoTIF-FSPI9KHGReRf76jPAsZY2i4rqZWm62-uTQDpLEN7bls4YzqlnveAbCUU4LPu2KUlXiwGz31drUyFmwqxRtyp2UScg3IjCDLAeFIJiOpe2D4K6JA25wvLfZyhHj1TTixTMfjLy', 10, 11200, '舒適的家庭型露營車，適合家庭旅遊', '1張雙人床 + 2張單人床', 6, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(47, 'RTC06C02', '標準型營位｜露營車', 6, 5, 'https://blogger.googleusercontent.com/img/a/AVvXsEjWdoUoqh5_O-WhL9qtBrLBzGhgSJ0eoWQXAlwXpIl71YIf0sAcyu70391L5AZce86MZEYXCJ0sjhdU120zAuyujTiyhBLMTdSPXOhYqZjvyLR30ViiJORhpFmxgOzWuLMldKmxeBTuxd7Mbr0fH1FU4OHDE5H-QS4Sjz97EvXb7ODWXFvfneNkW_AUTq0h', 8, 11500, '實用的標準型露營車，為您提供舒適的住宿', '1張雙人床 + 1張沙發床', 4, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(48, 'RTC06C03', '豪華型營位｜露營車', 6, 6, 'https://blogger.googleusercontent.com/img/a/AVvXsEgrIfGob4_0Y8yIfj_XdUhKs-VWBkuoeFRlUmJZZnGwFIq30zWD0NOOerhjV4k60-rF-bBFuRvR83pORw77fm8DZVkovNeDqiI3pktYKgCWHF8wZbP_tui50WxjteNBxRMJbGNBB0sWL4dHqdsWVzCDCYnjftJ9FRlenV0ge9lJO7VLqri9WgtiyDmwTWsf', 6, 16000, '高端豪華露營車，享受奢華的露營體驗', '1張大號雙人床', 3, '附全餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(49, 'RTC06T01', '家庭型營位｜小木屋', 6, 7, 'family_cabin6001.jpg,family_cabin6002.jpg', 12, 10000, '為家庭設計的溫馨小木屋', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(50, 'RTC06T02', '標準型營位｜小木屋', 6, 8, 'standard_cabin6001.jpg,standard_cabin6002.jpg', 10, 10200, '標準小木屋，為您提供舒適的假期', '1張雙人床 + 1張單人床', 4, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(51, 'RTC06T03', '豪華型營位｜小木屋', 6, 9, 'luxury_cabin6001.jpg,luxury_cabin6002.jpg', 8, 17500, '奢華的小木屋，讓您擁有獨特的住宿體驗', '1張大號雙人床', 3, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(52, 'RTC06B01', '家庭型營位｜帳篷', 6, 10, 'https://blogger.googleusercontent.com/img/a/AVvXsEjFBjXeGI45uwfWzs-PTlA_LZcb5EOUpj-mGBnJAL3Z8F1A5ANa3p6N8XRWjnvHmc8Da3ODZYcldbjKDDcMX5Naaa_Oa2R9vSh07ZP5-D5OUs1wS-wv7Ed53am3CcwUqkknzs73vEfOnzFBYyld4iELY9Xc11yup8EA_LOBuTr53vlG3TbONgX0E5Q9WnUr', 10, 9000, '適合全家的寬敞帳篷', '1張雙人床 + 2張單人床', 5, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(53, 'RTC06B02', '標準型營位｜帳篷', 6, 11, 'https://blogger.googleusercontent.com/img/a/AVvXsEj87Ywtt6hu0yS03z90s88u8FbMzWg4NZ7-eARV8gNaCLrDu_HSNHbr-eFe5h7FFbrgAMmtS-Z9tSVPo29krvLMzPoxbECa3JvORtgbCh5S5Ahy-_i3X9ORHuZ_-x22MD_14Io8A31G9i24DbSeYAp3uRtFG55xmAZOZQWE_wr78UIbxmg5ZY_k_OMqUAES', 9, 9500, '舒適標準帳篷，適合戶外活動', '1張雙人床', 3, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(54, 'RTC06B03', '豪華型營位｜帳篷', 6, 12, 'https://blogger.googleusercontent.com/img/a/AVvXsEimgWX2W2B6UAxXCwLJ69MYOoXWEutSplPH-LKDdHleiu0WHqE6nxUtD_GPhtawYR600C37WoJv9pRg_ZXphOLIXFpuuTdUSsfMQhR44AyQg5qfui0Pn0t5RErJMROzazjf4XInvKvR19DqEFqqDWwhoclfcUZGjBD5G-uexXFUQQJs33mGTTrT7VuUxf5f', 8, 14000, '奢華帳篷，提供獨特的戶外住宿體驗', '1張大號雙人床', 2, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(55, 'RTC07C01', '家庭型營位｜露營車', 7, 4, 'https://blogger.googleusercontent.com/img/a/AVvXsEgChQkqqivrt4UXzBtbNTWFwFypB3xs_terjGSyxft4-AwF4paQ3WoTIF-FSPI9KHGReRf76jPAsZY2i4rqZWm62-uTQDpLEN7bls4YzqlnveAbCUU4LPu2KUlXiwGz31drUyFmwqxRtyp2UScg3IjCDLAeFIJiOpe2D4K6JA25wvLfZyhHj1TTixTMfjLy', 12, 11000, '專為家庭設計的露營車，提供舒適的住宿', '1張雙人床 + 2張單人床', 6, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(56, 'RTC07C02', '標準型營位｜露營車', 7, 5, 'https://blogger.googleusercontent.com/img/a/AVvXsEjWdoUoqh5_O-WhL9qtBrLBzGhgSJ0eoWQXAlwXpIl71YIf0sAcyu70391L5AZce86MZEYXCJ0sjhdU120zAuyujTiyhBLMTdSPXOhYqZjvyLR30ViiJORhpFmxgOzWuLMldKmxeBTuxd7Mbr0fH1FU4OHDE5H-QS4Sjz97EvXb7ODWXFvfneNkW_AUTq0h', 10, 11500, '舒適的標準露營車，適合小家庭', '1張雙人床 + 1張單人床', 4, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(57, 'RTC07C03', '豪華型營位｜露營車', 7, 6, 'https://blogger.googleusercontent.com/img/a/AVvXsEgrIfGob4_0Y8yIfj_XdUhKs-VWBkuoeFRlUmJZZnGwFIq30zWD0NOOerhjV4k60-rF-bBFuRvR83pORw77fm8DZVkovNeDqiI3pktYKgCWHF8wZbP_tui50WxjteNBxRMJbGNBB0sWL4dHqdsWVzCDCYnjftJ9FRlenV0ge9lJO7VLqri9WgtiyDmwTWsf', 8, 16500, '豪華露營車，提供優雅的露營體驗', '1張大號雙人床', 3, '附全餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(58, 'RTC07T01', '家庭型營位｜小木屋', 7, 7, 'family_cabin7001.jpg,family_cabin7002.jpg', 14, 10500, '溫馨家庭小木屋，讓您有如回到家般的舒適感', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(59, 'RTC07T02', '標準型營位｜小木屋', 7, 8, 'standard_cabin7001.jpg,standard_cabin7002.jpg', 11, 10800, '適合家庭的標準小木屋，提供放鬆的環境', '1張雙人床 + 1張單人床', 4, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(60, 'RTC07T03', '豪華型營位｜小木屋', 7, 9, 'luxury_cabin7001.jpg,luxury_cabin7002.jpg', 9, 18000, '高端豪華小木屋，帶來奢華的露營體驗', '1張大號雙人床', 3, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(61, 'RTC07B01', '家庭型營位｜帳篷', 7, 10, 'family_tent7001.jpg,family_tent7002.jpg', 10, 9500, '寬敞的家庭帳篷，適合全家人使用', '1張雙人床 + 2張單人床', 5, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(62, 'RTC07B02', '標準型營位｜帳篷', 7, 11, 'standard_tent7001.jpg,standard_tent7002.jpg', 9, 9900, '舒適的標準帳篷，適合戶外活動', '1張雙人床', 3, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(63, 'RTC07B03', '豪華型營位｜帳篷', 7, 12, 'luxury_tent7001.jpg,luxury_tent7002.jpg', 8, 14500, '奢華帳篷，為您提供獨特的戶外住宿體驗', '1張大號雙人床', 2, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(64, 'RTC08C01', '家庭型營位｜露營車', 8, 4, 'family_rv8001.jpg,family_rv8002.jpg', 10, 12000, '適合全家的露營車，提供寬敞舒適的空間', '1張雙人床 + 2張單人床', 6, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(65, 'RTC08C02', '標準型營位｜露營車', 8, 5, 'standard_rv8001.jpg,standard_rv8002.jpg', 8, 12500, '標準露營車，讓您享受舒適的戶外生活', '1張雙人床', 4, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(66, 'RTC08C03', '豪華型營位｜露營車', 8, 6, 'luxury_rv8001.jpg,luxury_rv8002.jpg', 6, 18000, '豪華露營車，帶給您無與倫比的露營體驗', '1張大號雙人床', 3, '附全餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(67, 'RTC08T01', '家庭型營位｜小木屋', 8, 7, 'family_cabin8001.jpg,family_cabin8002.jpg', 11, 11500, '溫馨的小木屋，讓您的露營更有家的感覺', '1張雙人床 + 1張單人床', 5, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(68, 'RTC08T02', '標準型營位｜小木屋', 8, 8, 'standard_cabin8001.jpg,standard_cabin8002.jpg', 9, 12000, '標準小木屋，適合小型家庭入住', '1張雙人床', 4, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(69, 'RTC08T03', '豪華型營位｜小木屋', 8, 9, 'luxury_cabin8001.jpg,luxury_cabin8002.jpg', 7, 19500, '高端小木屋，提供奢華的住宿體驗', '1張大號雙人床', 3, '附全餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(70, 'RTC08B01', '家庭型營位｜帳篷', 8, 10, 'family_tent8001.jpg,family_tent8002.jpg', 12, 10000, '適合全家人一起露營的寬敞帳篷', '1張雙人床 + 2張單人床', 5, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(71, 'RTC08B02', '標準型營位｜帳篷', 8, 11, 'standard_tent8001.jpg,standard_tent8002.jpg', 10, 10500, '標準帳篷，適合小家庭或朋友聚會', '1張雙人床', 3, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(72, 'RTC08B03', '豪華型營位｜帳篷', 8, 12, 'luxury_tent8001.jpg,luxury_tent8002.jpg', 8, 15000, '豪華帳篷，提供奢華的露營體驗', '1張大號雙人床', 2, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(73, 'RTC09C01', '家庭型營位｜露營車', 9, 4, 'family_rv9001.jpg,family_rv9002.jpg', 10, 13000, '適合家庭出遊的舒適露營車，提供完整的設施', '1張雙人床 + 1張單人床', 6, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(74, 'RTC09C02', '標準型營位｜露營車', 9, 5, 'standard_rv9001.jpg,standard_rv9002.jpg', 8, 13500, '舒適的標準露營車，讓您的旅程更加便利', '1張雙人床', 4, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(75, 'RTC09C03', '豪華型營位｜露營車', 9, 6, 'luxury_rv9001.jpg,luxury_rv9002.jpg', 6, 20000, '豪華露營車，享受五星級的戶外住宿體驗', '1張大號雙人床', 3, '附全餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(76, 'RTC09T01', '家庭型營位｜小木屋', 9, 7, 'family_cabin9001.jpg,family_cabin9002.jpg', 11, 12500, '家庭式小木屋，帶給您溫馨的住宿感受', '1張雙人床 + 1張單人床', 5, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(77, 'RTC09T02', '標準型營位｜小木屋', 9, 8, 'standard_cabin9001.jpg,standard_cabin9002.jpg', 9, 13000, '標準小木屋，適合小型家庭入住', '1張雙人床', 4, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(78, 'RTC09T03', '豪華型營位｜小木屋', 9, 9, 'luxury_cabin9001.jpg,luxury_cabin9002.jpg', 7, 21000, '奢華小木屋，讓您體驗無與倫比的舒適', '1張大號雙人床', 3, '附全餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(79, 'RTC09B01', '家庭型營位｜帳篷', 9, 10, 'family_tent9001.jpg,family_tent9002.jpg', 12, 11000, '寬敞舒適的家庭帳篷，適合全家共享', '1張雙人床 + 2張單人床', 5, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(80, 'RTC09B02', '標準型營位｜帳篷', 9, 11, 'standard_tent9001.jpg,standard_tent9002.jpg', 10, 11500, '標準帳篷，為小型聚會提供舒適空間', '1張雙人床', 3, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(81, 'RTC09B03', '豪華型營位｜帳篷', 9, 12, 'luxury_tent9001.jpg,luxury_tent9002.jpg', 8, 16000, '豪華帳篷，提供高端的戶外住宿體驗', '1張大號雙人床', 2, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(82, 'RTC10C01', '家庭型營位｜露營車', 10, 4, 'family_rv1001.jpg,family_rv1002.jpg', 10, 14000, '適合家庭的露營車，內部設計舒適實用', '1張雙人床 + 1張單人床', 6, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(83, 'RTC10C02', '標準型營位｜露營車', 10, 5, 'standard_rv1001.jpg,standard_rv1002.jpg', 8, 14500, '標準露營車，適合中型家庭入住', '1張雙人床', 4, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(84, 'RTC10C03', '豪華型營位｜露營車', 10, 6, 'luxury_rv1001.jpg,luxury_rv1002.jpg', 6, 22000, '豪華露營車，讓您的戶外旅行變得無比享受', '1張大號雙人床', 3, '附全餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(85, 'RTC10T01', '家庭型營位｜小木屋', 10, 7, 'family_cabin1001.jpg,family_cabin1002.jpg', 11, 13000, '溫馨的家庭小木屋，適合家庭聚會', '1張雙人床 + 1張單人床', 5, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(86, 'RTC10T02', '標準型營位｜小木屋', 10, 8, 'standard_cabin1001.jpg,standard_cabin1002.jpg', 9, 13500, '標準小木屋，適合小家庭及朋友團體', '1張雙人床', 4, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(87, 'RTC10T03', '豪華型營位｜小木屋', 10, 9, 'luxury_cabin1001.jpg,luxury_cabin1002.jpg', 7, 23000, '豪華小木屋，讓您享受獨特的住宿體驗', '1張大號雙人床', 3, '附全餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(88, 'RTC10B01', '家庭型營位｜帳篷', 10, 10, 'family_tent1001.jpg,family_tent1002.jpg', 12, 12000, '適合家庭的帳篷，寬敞且舒適', '1張雙人床 + 2張單人床', 5, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(89, 'RTC10B02', '標準型營位｜帳篷', 10, 11, 'standard_tent1001.jpg,standard_tent1002.jpg', 10, 12500, '標準帳篷，適合小型聚會', '1張雙人床', 3, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(90, 'RTC10B03', '豪華型營位｜帳篷', 10, 12, 'luxury_tent1001.jpg,luxury_tent1002.jpg', 8, 17000, '豪華帳篷，讓您的露營體驗更為精緻', '1張大號雙人床', 2, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(91, 'RTC11C01', '家庭型營位｜露營車', 11, 4, 'family_rv21.jpg,family_rv22.jpg', 9, 4000, '家庭露營車，適合全家出遊，享受郊外的樂趣', '1張雙人床 + 1張上下鋪', 5, '附早餐和晚餐', '2024-09-29 12:00:00', '2024-09-29 12:00:00'),
(92, 'RTC11C02', '標準型營位｜露營車', 11, 5, 'standard_rv21.jpg,standard_rv22.jpg', 8, 5200, '標準露營車，適合小型家庭或朋友一同露營', '1張雙人床 + 1張沙發床', 4, '附早餐', '2024-09-29 12:00:00', '2024-09-29 12:00:00'),
(93, 'RTC11C03', '豪華型營位｜露營車', 11, 6, 'luxury_rv21.jpg,luxury_rv22.jpg', 7, 6800, '豪華露營車，提供舒適的設備和享受', '1張大號雙人床 + 1張單人床', 4, '附全餐和下午茶', '2024-09-29 12:00:00', '2024-09-29 12:00:00'),
(94, 'RTC11T01', '家庭型營位｜小木屋', 11, 7, 'family_cabin21.jpg,family_cabin22.jpg', 8, 4300, '家庭小木屋，讓全家一起體驗森林中的舒適住宿', '1張雙人床 + 1張單人床', 4, '附早餐和戶外燒烤', '2024-09-29 12:00:00', '2024-09-29 12:00:00'),
(95, 'RTC11T02', '標準型營位｜小木屋', 11, 8, 'standard_cabin21.jpg,standard_cabin22.jpg', 6, 5500, '標準小木屋，提供簡單且舒適的住宿體驗', '1張雙人床', 3, '附早餐和午餐', '2024-09-29 12:00:00', '2024-09-29 12:00:00'),
(96, 'RTC11T03', '豪華型營位｜小木屋', 11, 9, 'luxury_cabin21.jpg,luxury_cabin22.jpg', 5, 7800, '豪華小木屋，享受頂級設備和周圍自然景觀', '1張大號雙人床 + 1張沙發床', 4, '附全餐和私人導覽', '2024-09-29 12:00:00', '2024-09-29 12:00:00'),
(97, 'RTC11B01', '家庭型營位｜帳篷', 11, 10, 'family_tent21.jpg,family_tent22.jpg', 9, 3600, '家庭帳篷，適合父母和孩子一起露營', '1張雙人床', 4, '附早餐和晚餐', '2024-09-29 12:00:00', '2024-09-29 12:00:00'),
(98, 'RTC11B02', '標準型營位｜帳篷', 11, 11, 'standard_tent21.jpg,standard_tent22.jpg', 7, 4800, '標準帳篷，為小型團體提供露營樂趣', '1張雙人床', 3, '附早餐和戶外BBQ', '2024-09-29 12:00:00', '2024-09-29 12:00:00'),
(99, 'RTC11B03', '豪華型營位｜帳篷', 11, 12, 'luxury_tent21.jpg,luxury_tent22.jpg', 8, 6000, '豪華帳篷，提供舒適的戶外住宿體驗和美景', '1張大號雙人床', 2, '附全餐和營火晚會', '2024-09-29 12:00:00', '2024-09-29 12:00:00'),
(100, 'RTC12C01', '家庭型營位｜露營車', 12, 4, 'family_rv31.jpg,family_rv32.jpg', 10, 3900, '家庭露營車，提供充足的空間和設施，適合親子共度美好時光', '1張雙人床 + 2張單人床', 5, '附早餐', '2024-09-29 13:00:00', '2024-09-29 13:00:00'),
(101, 'RTC12C02', '標準型營位｜露營車', 12, 5, 'standard_rv31.jpg,standard_rv32.jpg', 8, 5000, '標準露營車，提供舒適的住宿環境，適合朋友或小家庭露營', '1張雙人床 + 1張沙發床', 4, '附早餐和下午茶', '2024-09-29 13:00:00', '2024-09-29 13:00:00'),
(102, 'RTC12C03', '豪華型營位｜露營車', 12, 6, 'luxury_rv31.jpg,luxury_rv32.jpg', 7, 6700, '豪華露營車，配備現代化設施，適合高端露營體驗', '1張大號雙人床 + 1張沙發床', 4, '附全餐和私人活動', '2024-09-29 13:00:00', '2024-09-29 13:00:00'),
(103, 'RTC12T01', '家庭型營位｜小木屋', 12, 7, 'family_cabin31.jpg,family_cabin32.jpg', 9, 4200, '家庭小木屋，安靜且舒適，適合全家入住', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 13:00:00', '2024-09-29 13:00:00'),
(104, 'RTC12T02', '標準型營位｜小木屋', 12, 8, 'standard_cabin31.jpg,standard_cabin32.jpg', 6, 5400, '標準小木屋，提供現代化設施和溫馨住宿', '1張雙人床', 3, '附早餐和午餐', '2024-09-29 13:00:00', '2024-09-29 13:00:00'),
(105, 'RTC12T03', '豪華型營位｜小木屋', 12, 9, 'luxury_cabin31.jpg,luxury_cabin32.jpg', 5, 7500, '豪華小木屋，提供頂級設施和高端住宿體驗', '1張大號雙人床 + 1張沙發床', 4, '附全餐和觀光服務', '2024-09-29 13:00:00', '2024-09-29 13:00:00'),
(106, 'RTC12B01', '家庭型營位｜帳篷', 12, 10, 'family_tent31.jpg,family_tent32.jpg', 9, 3500, '家庭帳篷，提供露天體驗和基本設施', '1張雙人床 + 2張單人床', 4, '附早餐和露營活動', '2024-09-29 13:00:00', '2024-09-29 13:00:00'),
(107, 'RTC12B02', '標準型營位｜帳篷', 12, 11, 'standard_tent31.jpg,standard_tent32.jpg', 7, 4600, '標準帳篷，適合一群朋友一起享受戶外露營', '1張雙人床', 3, '附早餐和晚餐', '2024-09-29 13:00:00', '2024-09-29 13:00:00'),
(108, 'RTC12B03', '豪華型營位｜帳篷', 12, 12, 'luxury_tent31.jpg,luxury_tent32.jpg', 8, 5800, '豪華帳篷，提供舒適露營體驗和現代化設備', '1張大號雙人床', 2, '附全餐和營火晚會', '2024-09-29 13:00:00', '2024-09-29 13:00:00'),
(109, 'RTC13C01', '家庭型營位｜露營車', 13, 4, 'family_rv41.jpg,family_rv42.jpg', 10, 4000, '家庭露營車，提供舒適空間與娛樂設備，適合親子遊樂', '1張雙人床 + 2張單人床', 5, '附早餐', '2024-09-29 13:00:00', '2024-09-29 13:00:00'),
(110, 'RTC13C02', '標準型營位｜露營車', 13, 5, 'standard_rv41.jpg,standard_rv42.jpg', 8, 5100, '標準露營車，提供舒適的室內環境，適合小家庭或朋友團體', '1張雙人床 + 1張沙發床', 4, '附早餐和下午茶', '2024-09-29 13:00:00', '2024-09-29 13:00:00'),
(111, 'RTC13C03', '豪華型營位｜露營車', 13, 6, 'luxury_rv41.jpg,luxury_rv42.jpg', 6, 6800, '豪華露營車，配有現代化設施，提供奢華露營體驗', '1張大號雙人床 + 1張沙發床', 4, '附全餐和戶外活動', '2024-09-29 13:00:00', '2024-09-29 13:00:00'),
(112, 'RTC13T01', '家庭型營位｜小木屋', 13, 7, 'family_cabin41.jpg,family_cabin42.jpg', 9, 4300, '家庭小木屋，提供安靜舒適的住宿環境，適合全家入住', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 13:00:00', '2024-09-29 13:00:00'),
(113, 'RTC13T02', '標準型營位｜小木屋', 13, 8, 'standard_cabin41.jpg,standard_cabin42.jpg', 7, 5500, '標準小木屋，提供溫馨的現代設施，適合小團體', '1張雙人床', 3, '附早餐和午餐', '2024-09-29 13:00:00', '2024-09-29 13:00:00'),
(114, 'RTC13T03', '豪華型營位｜小木屋', 13, 9, 'luxury_cabin41.jpg,luxury_cabin42.jpg', 5, 7600, '豪華小木屋，提供頂級設備和高端住宿服務', '1張大號雙人床 + 1張沙發床', 4, '附全餐和私人導覽活動', '2024-09-29 13:00:00', '2024-09-29 13:00:00'),
(115, 'RTC13B01', '家庭型營位｜帳篷', 13, 10, 'family_tent41.jpg,family_tent42.jpg', 9, 3600, '家庭帳篷，提供基本設施，適合戶外家庭體驗', '1張雙人床 + 2張單人床', 4, '附早餐和露營工具', '2024-09-29 13:00:00', '2024-09-29 13:00:00'),
(116, 'RTC13B02', '標準型營位｜帳篷', 13, 11, 'standard_tent41.jpg,standard_tent42.jpg', 7, 4700, '標準帳篷，適合朋友團體的戶外活動，配備舒適床位', '1張雙人床', 3, '附早餐和晚餐', '2024-09-29 13:00:00', '2024-09-29 13:00:00'),
(117, 'RTC13B03', '豪華型營位｜帳篷', 13, 12, 'luxury_tent41.jpg,luxury_tent42.jpg', 6, 5900, '豪華帳篷，提供高端的戶外住宿體驗，附現代化設施', '1張大號雙人床', 2, '附全餐和晚間活動', '2024-09-29 13:00:00', '2024-09-29 13:00:00'),
(118, 'RTC14C01', '家庭型營位｜露營車', 14, 4, 'family_rv51.jpg,family_rv52.jpg', 8, 3900, '適合全家出遊的露營車，提供基本生活設備與舒適環境', '1張雙人床 + 2張單人床', 5, '附早餐', '2024-09-29 14:00:00', '2024-09-29 14:00:00'),
(119, 'RTC14C02', '標準型營位｜露營車', 14, 5, 'standard_rv51.jpg,standard_rv52.jpg', 6, 5100, '提供現代化設備的標準露營車，適合小家庭或好友同行', '1張雙人床 + 1張沙發床', 4, '附早餐和下午茶', '2024-09-29 14:00:00', '2024-09-29 14:00:00'),
(120, 'RTC14C03', '豪華型營位｜露營車', 14, 6, 'luxury_rv51.jpg,luxury_rv52.jpg', 4, 7200, '豪華露營車，提供頂級設施與露營體驗，享受奢華戶外時光', '1張大號雙人床 + 1張沙發床', 4, '附全餐和戶外活動', '2024-09-29 14:00:00', '2024-09-29 14:00:00'),
(121, 'RTC14T01', '家庭型營位｜小木屋', 14, 7, 'family_cabin51.jpg,family_cabin52.jpg', 7, 4300, '家庭小木屋，配有基礎設施，適合親子入住', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 14:00:00', '2024-09-29 14:00:00'),
(122, 'RTC14T02', '標準型營位｜小木屋', 14, 8, 'standard_cabin51.jpg,standard_cabin52.jpg', 6, 5600, '標準小木屋，提供溫馨設施，適合朋友或小團體使用', '1張雙人床 + 1張單人床', 4, '附早餐和午餐', '2024-09-29 14:00:00', '2024-09-29 14:00:00'),
(123, 'RTC14T03', '豪華型營位｜小木屋', 14, 9, 'luxury_cabin51.jpg,luxury_cabin52.jpg', 5, 7800, '豪華小木屋，提供高端設施與私人服務，享受靜謐山林', '1張大號雙人床 + 1張沙發床', 4, '附全餐和導覽活動', '2024-09-29 14:00:00', '2024-09-29 14:00:00'),
(124, 'RTC14B01', '家庭型營位｜帳篷', 14, 10, 'family_tent51.jpg,family_tent52.jpg', 9, 3500, '家庭帳篷，提供親近自然的戶外住宿體驗', '1張雙人床 + 2張單人床', 4, '附早餐和露營工具', '2024-09-29 14:00:00', '2024-09-29 14:00:00'),
(125, 'RTC14B02', '標準型營位｜帳篷', 14, 11, 'standard_tent51.jpg,standard_tent52.jpg', 8, 4800, '標準帳篷，適合與朋友一同享受露營樂趣', '1張雙人床', 3, '附早餐和晚餐', '2024-09-29 14:00:00', '2024-09-29 14:00:00'),
(126, 'RTC14B03', '豪華型營位｜帳篷', 14, 12, 'luxury_tent51.jpg,luxury_tent52.jpg', 6, 6000, '豪華帳篷，提供獨特的露營體驗與現代設施', '1張大號雙人床', 2, '附全餐和私人導覽', '2024-09-29 14:00:00', '2024-09-29 14:00:00'),
(127, 'RTC15C01', '家庭型營位｜露營車', 15, 4, 'family_rv61.jpg,family_rv62.jpg', 10, 4000, '適合全家出遊的舒適露營車，配備齊全的基礎設施', '1張雙人床 + 2張單人床', 5, '附早餐和晚餐', '2024-09-29 16:00:00', '2024-09-29 16:00:00'),
(128, 'RTC15C02', '標準型營位｜露營車', 15, 5, 'standard_rv61.jpg,standard_rv62.jpg', 8, 5200, '適合家庭或小團體的現代化露營車，配備舒適床位', '1張雙人床 + 1張沙發床', 4, '附早餐和燒烤晚餐', '2024-09-29 16:00:00', '2024-09-29 16:00:00'),
(129, 'RTC15C03', '豪華型營位｜露營車', 15, 6, 'luxury_rv61.jpg,luxury_rv62.jpg', 6, 7400, '豪華露營車，享有頂級露營設施與美景', '1張大號雙人床 + 1張沙發床', 4, '附全餐和私人導覽', '2024-09-29 16:00:00', '2024-09-29 16:00:00'),
(130, 'RTC15T01', '家庭型營位｜小木屋', 15, 7, 'family_cabin61.jpg,family_cabin62.jpg', 7, 4400, '適合全家入住的木屋，環境舒適並提供基本設施', '1張雙人床 + 2張單人床', 5, '附早餐和午餐', '2024-09-29 16:00:00', '2024-09-29 16:00:00'),
(131, 'RTC15T02', '標準型營位｜小木屋', 15, 8, 'standard_cabin61.jpg,standard_cabin62.jpg', 5, 5700, '標準木屋，提供便利設施，適合與朋友同行', '1張雙人床 + 1張沙發床', 4, '附早餐和露營晚餐', '2024-09-29 16:00:00', '2024-09-29 16:00:00'),
(132, 'RTC15T03', '豪華型營位｜小木屋', 15, 9, 'luxury_cabin61.jpg,luxury_cabin62.jpg', 4, 7900, '豪華木屋，擁有獨立戶外空間和高端設施', '1張大號雙人床 + 1張單人床', 3, '附全餐和高級茶點', '2024-09-29 16:00:00', '2024-09-29 16:00:00'),
(133, 'RTC15B01', '家庭型營位｜帳篷', 15, 10, 'family_tent61.jpg,family_tent62.jpg', 9, 3600, '適合全家使用的帳篷，享受戶外的自然美景', '1張雙人床 + 2張單人床', 4, '附早餐和露營工具', '2024-09-29 16:00:00', '2024-09-29 16:00:00'),
(134, 'RTC15B02', '標準型營位｜帳篷', 15, 11, 'standard_tent61.jpg,standard_tent62.jpg', 8, 4900, '標準帳篷，適合想要享受戶外露營的旅客', '1張雙人床', 3, '附早餐和晚餐', '2024-09-29 16:00:00', '2024-09-29 16:00:00'),
(135, 'RTC15B03', '豪華型營位｜帳篷', 15, 12, 'luxury_tent61.jpg,luxury_tent62.jpg', 6, 6100, '豪華帳篷，提供舒適的戶外住宿體驗', '1張大號雙人床', 2, '附全餐和私人服務', '2024-09-29 16:00:00', '2024-09-29 16:00:00'),
(136, 'RTC16C01', '家庭型營位｜露營車', 16, 4, 'family_rv71.jpg,family_rv72.jpg', 9, 4100, '適合全家出遊的舒適露營車，設有額外的戶外休閒空間', '1張雙人床 + 2張單人床', 5, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(137, 'RTC16C02', '標準型營位｜露營車', 16, 5, 'standard_rv71.jpg,standard_rv72.jpg', 7, 5300, '現代化露營車，配備舒適床位及小廚房', '1張雙人床 + 1張沙發床', 4, '附早餐和露營工具', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(138, 'RTC16C03', '豪華型營位｜露營車', 16, 6, 'luxury_rv71.jpg,luxury_rv72.jpg', 5, 7500, '豪華露營車，享有私人休閒區及頂級設施', '1張大號雙人床 + 1張沙發床', 4, '附全餐和私人導覽', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(139, 'RTC16T01', '家庭型營位｜小木屋', 16, 7, 'family_cabin71.jpg,family_cabin72.jpg', 8, 4500, '適合全家入住的小木屋，提供舒適的住宿體驗', '1張雙人床 + 2張單人床', 5, '附早餐和午餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(140, 'RTC16T02', '標準型營位｜小木屋', 16, 8, 'standard_cabin71.jpg,standard_cabin72.jpg', 6, 5800, '標準小木屋，適合家庭或朋友團體的戶外住宿', '1張雙人床 + 1張沙發床', 4, '附早餐和露營晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(141, 'RTC16T03', '豪華型營位｜小木屋', 16, 9, 'luxury_cabin71.jpg,luxury_cabin72.jpg', 4, 8000, '豪華小木屋，配備獨立浴室與高級設施', '1張大號雙人床 + 1張單人床', 3, '附全餐和高級茶點', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(142, 'RTC16B01', '家庭型營位｜帳篷', 16, 10, 'family_tent71.jpg,family_tent72.jpg', 10, 3700, '提供全家使用的帳篷，享受自然環境', '1張雙人床 + 2張單人床', 4, '附早餐和露營工具', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(143, 'RTC16B02', '標準型營位｜帳篷', 16, 11, 'standard_tent71.jpg,standard_tent72.jpg', 8, 5000, '標準帳篷，適合熱愛戶外活動的旅客', '1張雙人床', 3, '附早餐和露營晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(144, 'RTC16B03', '豪華型營位｜帳篷', 16, 12, 'luxury_tent71.jpg,luxury_tent72.jpg', 6, 6200, '豪華帳篷，享受奢華的戶外住宿體驗', '1張大號雙人床', 2, '附全餐和私人服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(145, 'RTC17C01', '家庭型營位｜露營車', 17, 4, 'family_rv81.jpg,family_rv82.jpg', 10, 4200, '適合全家出遊的露營車，寬敞舒適，設有戶外用餐區', '1張雙人床 + 2張單人床', 5, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(146, 'RTC17C02', '標準型營位｜露營車', 17, 5, 'standard_rv81.jpg,standard_rv82.jpg', 8, 5400, '標準露營車，配備現代化設施，讓您享受戶外生活', '1張雙人床 + 1張沙發床', 4, '附早餐和小吃', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(147, 'RTC17C03', '豪華型營位｜露營車', 17, 6, 'luxury_rv81.jpg,luxury_rv82.jpg', 6, 7600, '豪華露營車，享有最舒適的住宿體驗，設備齊全', '1張大號雙人床 + 1張沙發床', 4, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(148, 'RTC17T01', '家庭型營位｜小木屋', 17, 7, 'family_cabin81.jpg,family_cabin82.jpg', 9, 4600, '家庭友善小木屋，提供舒適的住宿環境和私人空間', '1張雙人床 + 2張單人床', 5, '附早餐和午餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(149, 'RTC17T02', '標準型營位｜小木屋', 17, 8, 'standard_cabin81.jpg,standard_cabin82.jpg', 7, 5900, '標準小木屋，設有基本設施，讓您享受自然風光', '1張雙人床 + 1張沙發床', 4, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(150, 'RTC17T03', '豪華型營位｜小木屋', 17, 9, 'luxury_cabin81.jpg,luxury_cabin82.jpg', 5, 8200, '豪華小木屋，提供高級設施和獨特的住宿體驗', '1張大號雙人床 + 1張單人床', 3, '附全餐和專屬導覽', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(151, 'RTC17B01', '家庭型營位｜帳篷', 17, 10, 'family_tent81.jpg,family_tent82.jpg', 11, 3800, '家庭專用的帳篷，享受與大自然的親密接觸', '1張雙人床 + 2張單人床', 4, '附早餐和營火晚會', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(152, 'RTC17B02', '標準型營位｜帳篷', 17, 11, 'standard_tent81.jpg,standard_tent82.jpg', 9, 5100, '標準帳篷，適合小型團體或夫妻，享受簡單的露營樂趣', '1張雙人床', 3, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(153, 'RTC17B03', '豪華型營位｜帳篷', 17, 12, 'luxury_tent81.jpg,luxury_tent82.jpg', 7, 6300, '豪華帳篷，享受奢華露營體驗，配備高級設施', '1張大號雙人床', 2, '附全餐和私人服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(154, 'RTC18C01', '家庭型營位｜露營車', 18, 4, 'family_rv83.jpg,family_rv84.jpg', 12, 4400, '適合全家出遊的露營車，配備舒適設施，讓您愉快露營', '1張雙人床 + 2張單人床', 5, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(155, 'RTC18C02', '標準型營位｜露營車', 18, 5, 'standard_rv83.jpg,standard_rv84.jpg', 10, 5600, '標準露營車，提供良好的居住環境，適合小家庭', '1張雙人床 + 1張沙發床', 4, '附早餐和輕食', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(156, 'RTC18C03', '豪華型營位｜露營車', 18, 6, 'luxury_rv83.jpg,luxury_rv84.jpg', 8, 7800, '豪華露營車，享受頂級舒適與便利，適合奢華露營者', '1張大號雙人床 + 1張沙發床', 4, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(157, 'RTC18T01', '家庭型營位｜小木屋', 18, 7, 'family_cabin83.jpg,family_cabin84.jpg', 11, 4700, '家庭友善小木屋，為您提供舒適的住宿和美好的回憶', '1張雙人床 + 2張單人床', 5, '附早餐和午餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(158, 'RTC18T02', '標準型營位｜小木屋', 18, 8, 'standard_cabin83.jpg,standard_cabin84.jpg', 9, 5900, '標準小木屋，讓您輕鬆享受戶外生活', '1張雙人床 + 1張沙發床', 4, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(159, 'RTC18T03', '豪華型營位｜小木屋', 18, 9, 'luxury_cabin83.jpg,luxury_cabin84.jpg', 7, 8000, '豪華小木屋，擁有一流設施與獨特設計，提供最佳的住宿體驗', '1張大號雙人床 + 1張單人床', 3, '附全餐和私人導覽', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(160, 'RTC18B01', '家庭型營位｜帳篷', 18, 10, 'family_tent83.jpg,family_tent84.jpg', 12, 3900, '適合全家的帳篷，讓您享受與自然的親密接觸', '1張雙人床 + 2張單人床', 4, '附早餐和晚會', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(161, 'RTC18B02', '標準型營位｜帳篷', 18, 11, 'standard_tent83.jpg,standard_tent84.jpg', 10, 5200, '標準帳篷，適合小團體，享受簡單的露營樂趣', '1張雙人床', 3, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(162, 'RTC18B03', '豪華型營位｜帳篷', 18, 12, 'luxury_tent83.jpg,luxury_tent84.jpg', 8, 6500, '豪華帳篷，享受奢華露營體驗，配備高級設施', '1張大號雙人床', 2, '附全餐和私人服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(163, 'RTC19C01', '家庭型營位｜露營車', 19, 4, 'family_rv91.jpg,family_rv92.jpg', 15, 4500, '適合家庭出遊的露營車，舒適設施讓您享受自然', '1張雙人床 + 2張單人床', 5, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(164, 'RTC19C02', '標準型營位｜露營車', 19, 5, 'standard_rv91.jpg,standard_rv92.jpg', 12, 5700, '標準露營車，提供足夠的空間，適合小家庭', '1張雙人床 + 1張沙發床', 4, '附早餐和輕食', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(165, 'RTC19C03', '豪華型營位｜露營車', 19, 6, 'luxury_rv91.jpg,luxury_rv92.jpg', 8, 7900, '豪華露營車，讓您享受舒適與便利的戶外生活', '1張大號雙人床 + 1張沙發床', 4, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(166, 'RTC19T01', '家庭型營位｜小木屋', 19, 7, 'family_cabin91.jpg,family_cabin92.jpg', 11, 4800, '舒適的小木屋，為全家提供美好的露營體驗', '1張雙人床 + 2張單人床', 5, '附早餐和午餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(167, 'RTC19T02', '標準型營位｜小木屋', 19, 8, 'standard_cabin91.jpg,standard_cabin92.jpg', 10, 6000, '標準小木屋，提供良好的住宿環境，適合小型團體', '1張雙人床 + 1張沙發床', 4, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(168, 'RTC19T03', '豪華型營位｜小木屋', 19, 9, 'luxury_cabin91.jpg,luxury_cabin92.jpg', 9, 8200, '豪華小木屋，提供一流設施與服務，適合奢華露營者', '1張大號雙人床 + 1張單人床', 3, '附全餐和私人導覽', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(169, 'RTC19B01', '家庭型營位｜帳篷', 19, 10, 'family_tent91.jpg,family_tent92.jpg', 12, 4000, '家庭友善帳篷，讓您享受親密的自然接觸', '1張雙人床 + 2張單人床', 4, '附早餐和晚會', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(170, 'RTC19B02', '標準型營位｜帳篷', 19, 11, 'standard_tent91.jpg,standard_tent92.jpg', 10, 5300, '標準帳篷，適合小型團體，享受簡單的露營樂趣', '1張雙人床', 3, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(171, 'RTC19B03', '豪華型營位｜帳篷', 19, 12, 'luxury_tent91.jpg,luxury_tent92.jpg', 8, 6700, '豪華帳篷，享受高端露營體驗，配備奢華設施', '1張大號雙人床', 2, '附全餐和私人服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(172, 'RTC20C01', '家庭型營位｜露營車', 20, 4, 'family_rv101.jpg,family_rv102.jpg', 14, 4600, '適合家庭出遊的露營車，讓您與自然親密接觸', '1張雙人床 + 2張單人床', 5, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(173, 'RTC20C02', '標準型營位｜露營車', 20, 5, 'standard_rv101.jpg,standard_rv102.jpg', 12, 5800, '標準露營車，提供舒適的住宿空間', '1張雙人床 + 1張沙發床', 4, '附早餐和輕食', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(174, 'RTC20C03', '豪華型營位｜露營車', 20, 6, 'luxury_rv101.jpg,luxury_rv102.jpg', 10, 8000, '豪華露營車，享受高端露營體驗', '1張大號雙人床 + 1張沙發床', 4, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(175, 'RTC20T01', '家庭型營位｜小木屋', 20, 7, 'family_cabin101.jpg,family_cabin102.jpg', 13, 4900, '舒適的小木屋，適合家庭共度悠閒時光', '1張雙人床 + 2張單人床', 5, '附早餐和午餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(176, 'RTC20T02', '標準型營位｜小木屋', 20, 8, 'standard_cabin101.jpg,standard_cabin102.jpg', 11, 6100, '標準小木屋，提供簡單舒適的住宿環境', '1張雙人床 + 1張沙發床', 4, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(177, 'RTC20T03', '豪華型營位｜小木屋', 20, 9, 'luxury_cabin101.jpg,luxury_cabin102.jpg', 9, 8400, '豪華小木屋，讓您享受露營的奢華體驗', '1張大號雙人床 + 1張單人床', 3, '附全餐和私人導覽', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(178, 'RTC20B01', '家庭型營位｜帳篷', 20, 10, 'family_tent101.jpg,family_tent102.jpg', 12, 4200, '家庭友善帳篷，讓您與家人共度美好時光', '1張雙人床 + 2張單人床', 4, '附早餐和晚會', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(179, 'RTC20B02', '標準型營位｜帳篷', 20, 11, 'standard_tent101.jpg,standard_tent102.jpg', 10, 5400, '標準帳篷，適合小型團體，簡單而舒適', '1張雙人床', 3, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(180, 'RTC20B03', '豪華型營位｜帳篷', 20, 12, 'luxury_tent101.jpg,luxury_tent102.jpg', 8, 6800, '豪華帳篷，讓您享受高端露營的舒適與便利', '1張大號雙人床', 2, '附全餐和私人服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(181, 'RTC21C01', '家庭型營位｜露營車', 21, 4, 'family_rv201.jpg,family_rv202.jpg', 15, 4800, '適合全家出遊的露營車，空間寬敞，讓您舒適自在', '1張雙人床 + 2張單人床', 5, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(182, 'RTC21C02', '標準型營位｜露營車', 21, 5, 'standard_rv201.jpg,standard_rv202.jpg', 12, 6000, '標準露營車，簡約設計，提供舒適的居住體驗', '1張雙人床 + 1張沙發床', 4, '附早餐和簡餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(183, 'RTC21C03', '豪華型營位｜露營車', 21, 6, 'luxury_rv201.jpg,luxury_rv202.jpg', 10, 8200, '豪華露營車，享受極致的露營生活', '1張大號雙人床 + 1張沙發床', 4, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(184, 'RTC21T01', '家庭型營位｜小木屋', 21, 7, 'family_cabin201.jpg,family_cabin202.jpg', 14, 5000, '溫馨的小木屋，適合家庭一起享受自然', '1張雙人床 + 2張單人床', 5, '附早餐和午餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(185, 'RTC21T02', '標準型營位｜小木屋', 21, 8, 'standard_cabin201.jpg,standard_cabin202.jpg', 11, 6200, '標準小木屋，提供溫暖舒適的環境', '1張雙人床 + 1張沙發床', 4, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(186, 'RTC21T03', '豪華型營位｜小木屋', 21, 9, 'luxury_cabin201.jpg,luxury_cabin202.jpg', 9, 8500, '豪華小木屋，讓您享受完美的露營假期', '1張大號雙人床 + 1張單人床', 3, '附全餐和私人導覽', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(187, 'RTC21B01', '家庭型營位｜帳篷', 21, 10, 'family_tent201.jpg,family_tent202.jpg', 13, 4300, '家庭友善帳篷，讓您在大自然中享受家庭時光', '1張雙人床 + 2張單人床', 4, '附早餐和晚會', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(188, 'RTC21B02', '標準型營位｜帳篷', 21, 11, 'standard_tent201.jpg,standard_tent202.jpg', 10, 5500, '標準帳篷，適合小型團體，簡約而舒適', '1張雙人床', 3, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(189, 'RTC21B03', '豪華型營位｜帳篷', 21, 12, 'luxury_tent201.jpg,luxury_tent202.jpg', 8, 6900, '豪華帳篷，讓您享受高端露營的舒適與便利', '1張大號雙人床', 2, '附全餐和私人服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(190, 'RTC22C01', '家庭型營位｜露營車', 22, 4, 'family_rv301.jpg,family_rv302.jpg', 10, 4900, '寬敞的家庭型露營車，讓您全家共度美好時光', '1張雙人床 + 2張單人床', 5, '附早餐和午餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(191, 'RTC22C02', '標準型營位｜露營車', 22, 5, 'standard_rv301.jpg,standard_rv302.jpg', 8, 6100, '舒適的標準型露營車，適合中型家庭', '1張雙人床 + 1張沙發床', 4, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(192, 'RTC22C03', '豪華型營位｜露營車', 22, 6, 'luxury_rv301.jpg,luxury_rv302.jpg', 6, 8200, '享受豪華型露營車的極致舒適', '1張大號雙人床 + 1張單人床', 4, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(193, 'RTC22T01', '家庭型營位｜小木屋', 22, 7, 'family_cabin301.jpg,family_cabin302.jpg', 10, 5100, '溫馨的小木屋，讓您與家人享受安靜的露營假期', '1張雙人床 + 2張單人床', 5, '附早餐和午餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(194, 'RTC22T02', '標準型營位｜小木屋', 22, 8, 'standard_cabin301.jpg,standard_cabin302.jpg', 8, 6400, '簡約設計的標準小木屋，舒適又實用', '1張雙人床 + 1張沙發床', 4, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(195, 'RTC22T03', '豪華型營位｜小木屋', 22, 9, 'luxury_cabin301.jpg,luxury_cabin302.jpg', 5, 8700, '豪華小木屋，提供奢華的露營體驗', '1張大號雙人床 + 1張單人床', 3, '附全餐和私人導覽', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(196, 'RTC22B01', '家庭型營位｜帳篷', 22, 10, 'family_tent301.jpg,family_tent302.jpg', 12, 4500, '適合家庭的帳篷，與自然親密接觸', '1張雙人床 + 2張單人床', 4, '附早餐和晚會', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(197, 'RTC22B02', '標準型營位｜帳篷', 22, 11, 'standard_tent301.jpg,standard_tent302.jpg', 10, 5800, '簡約標準帳篷，讓您輕鬆享受露營樂趣', '1張雙人床', 3, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(198, 'RTC22B03', '豪華型營位｜帳篷', 22, 12, 'luxury_tent301.jpg,luxury_tent302.jpg', 8, 7100, '高端豪華帳篷，享受獨特的露營體驗', '1張大號雙人床', 2, '附全餐和私人服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(199, 'RTC23C01', '家庭型營位｜露營車', 23, 4, 'family_rv401.jpg,family_rv402.jpg', 10, 5000, '適合全家的露營車，享受自然與舒適', '1張雙人床 + 2張單人床', 5, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(200, 'RTC23C02', '標準型營位｜露營車', 23, 5, 'standard_rv401.jpg,standard_rv402.jpg', 8, 6200, '標準型露營車，舒適又實用', '1張雙人床 + 1張單人床', 4, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(201, 'RTC23C03', '豪華型營位｜露營車', 23, 6, 'luxury_rv401.jpg,luxury_rv402.jpg', 6, 8300, '享受豪華露營車的非凡體驗', '1張大號雙人床 + 1張單人床', 4, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(202, 'RTC23T01', '家庭型營位｜小木屋', 23, 7, 'family_cabin401.jpg,family_cabin402.jpg', 10, 5200, '適合家庭的小木屋，營造溫馨氛圍', '1張雙人床 + 2張單人床', 5, '附早餐和午餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(203, 'RTC23T02', '標準型營位｜小木屋', 23, 8, 'standard_cabin401.jpg,standard_cabin402.jpg', 8, 6500, '舒適的標準小木屋，提供良好的隱私', '1張雙人床 + 1張沙發床', 4, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(204, 'RTC23T03', '豪華型營位｜小木屋', 23, 9, 'luxury_cabin401.jpg,luxury_cabin402.jpg', 5, 8800, '奢華小木屋，享受高端露營的樂趣', '1張大號雙人床 + 1張單人床', 3, '附全餐和私人導覽', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(205, 'RTC23B01', '家庭型營位｜帳篷', 23, 10, 'family_tent401.jpg,family_tent402.jpg', 12, 4600, '家庭帳篷，讓您與自然親密接觸', '1張雙人床 + 2張單人床', 4, '附早餐和晚會', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(206, 'RTC23B02', '標準型營位｜帳篷', 23, 11, 'standard_tent401.jpg,standard_tent402.jpg', 10, 5900, '簡約舒適的標準帳篷，輕鬆享受露營', '1張雙人床', 3, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(207, 'RTC23B03', '豪華型營位｜帳篷', 23, 12, 'luxury_tent401.jpg,luxury_tent402.jpg', 8, 7200, '高端豪華帳篷，享受獨特的露營體驗', '1張大號雙人床', 2, '附全餐和私人服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(208, 'RTC24C01', '家庭型營位｜露營車', 24, 4, 'family_rv501.jpg,family_rv502.jpg', 12, 5100, '適合全家的露營車，享受自然與舒適', '1張雙人床 + 2張單人床', 5, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(209, 'RTC24C02', '標準型營位｜露營車', 24, 5, 'standard_rv501.jpg,standard_rv502.jpg', 10, 6200, '標準型露營車，舒適又實用', '1張雙人床 + 1張單人床', 4, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(210, 'RTC24C03', '豪華型營位｜露營車', 24, 6, 'luxury_rv501.jpg,luxury_rv502.jpg', 8, 8300, '享受豪華露營車的非凡體驗', '1張大號雙人床 + 1張單人床', 4, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(211, 'RTC24T01', '家庭型營位｜小木屋', 24, 7, 'family_cabin501.jpg,family_cabin502.jpg', 10, 5400, '適合家庭的小木屋，營造溫馨氛圍', '1張雙人床 + 2張單人床', 5, '附早餐和午餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(212, 'RTC24T02', '標準型營位｜小木屋', 24, 8, 'standard_cabin501.jpg,standard_cabin502.jpg', 9, 6700, '舒適的標準小木屋，提供良好的隱私', '1張雙人床 + 1張沙發床', 4, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(213, 'RTC24T03', '豪華型營位｜小木屋', 24, 9, 'luxury_cabin501.jpg,luxury_cabin502.jpg', 7, 8900, '奢華小木屋，享受高端露營的樂趣', '1張大號雙人床 + 1張單人床', 3, '附全餐和私人導覽', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(214, 'RTC24B01', '家庭型營位｜帳篷', 24, 10, 'family_tent501.jpg,family_tent502.jpg', 11, 4700, '家庭帳篷，讓您與自然親密接觸', '1張雙人床 + 2張單人床', 4, '附早餐和晚會', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(215, 'RTC24B02', '標準型營位｜帳篷', 24, 11, 'standard_tent501.jpg,standard_tent502.jpg', 10, 6000, '簡約舒適的標準帳篷，輕鬆享受露營', '1張雙人床', 3, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(216, 'RTC24B03', '豪華型營位｜帳篷', 24, 12, 'luxury_tent501.jpg,luxury_tent502.jpg', 8, 7300, '高端豪華帳篷，享受獨特的露營體驗', '1張大號雙人床', 2, '附全餐和私人服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(217, 'RTC25C01', '家庭型營位｜露營車', 25, 4, 'family_rv601.jpg,family_rv602.jpg', 10, 5300, '適合全家的露營車，享受舒適與自然', '1張雙人床 + 2張單人床', 5, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(218, 'RTC25C02', '標準型營位｜露營車', 25, 5, 'standard_rv601.jpg,standard_rv602.jpg', 8, 6400, '標準型露營車，舒適又實用', '1張雙人床 + 1張單人床', 4, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(219, 'RTC25C03', '豪華型營位｜露營車', 25, 6, 'luxury_rv601.jpg,luxury_rv602.jpg', 6, 8500, '享受豪華露營車的非凡體驗', '1張大號雙人床 + 1張單人床', 4, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(220, 'RTC25T01', '家庭型營位｜小木屋', 25, 7, 'family_cabin601.jpg,family_cabin602.jpg', 10, 5500, '適合家庭的小木屋，營造溫馨氛圍', '1張雙人床 + 2張單人床', 5, '附早餐和午餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(221, 'RTC25T02', '標準型營位｜小木屋', 25, 8, 'standard_cabin601.jpg,standard_cabin602.jpg', 9, 6800, '舒適的標準小木屋，提供良好的隱私', '1張雙人床 + 1張沙發床', 4, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(222, 'RTC25T03', '豪華型營位｜小木屋', 25, 9, 'luxury_cabin601.jpg,luxury_cabin602.jpg', 7, 9000, '奢華小木屋，享受高端露營的樂趣', '1張大號雙人床 + 1張單人床', 3, '附全餐和私人導覽', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(223, 'RTC25B01', '家庭型營位｜帳篷', 25, 10, 'family_tent601.jpg,family_tent602.jpg', 11, 4800, '家庭帳篷，讓您與自然親密接觸', '1張雙人床 + 2張單人床', 4, '附早餐和晚會', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(224, 'RTC25B02', '標準型營位｜帳篷', 25, 11, 'standard_tent601.jpg,standard_tent602.jpg', 10, 6000, '簡約舒適的標準帳篷，輕鬆享受露營', '1張雙人床', 3, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(225, 'RTC25B03', '豪華型營位｜帳篷', 25, 12, 'luxury_tent601.jpg,luxury_tent602.jpg', 8, 7400, '高端豪華帳篷，享受獨特的露營體驗', '1張大號雙人床', 2, '附全餐和私人服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(226, 'RTC26C01', '家庭型營位｜露營車', 26, 4, 'family_rv701.jpg,family_rv702.jpg', 10, 5400, '全家共享的舒適露營車，適合各年齡層', '1張雙人床 + 2張單人床', 5, '附早餐和輕便午餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(227, 'RTC26C02', '標準型營位｜露營車', 26, 5, 'standard_rv701.jpg,standard_rv702.jpg', 8, 6500, '標準型露營車，適合中小家庭使用', '1張雙人床 + 1張單人床', 4, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(228, 'RTC26C03', '豪華型營位｜露營車', 26, 6, 'luxury_rv701.jpg,luxury_rv702.jpg', 6, 8600, '豪華露營車，讓您享受奢華的露營體驗', '1張大號雙人床 + 1張單人床', 4, '附全餐和私人導覽', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(229, 'RTC26T01', '家庭型營位｜小木屋', 26, 7, 'family_cabin701.jpg,family_cabin702.jpg', 10, 5600, '小木屋為家庭提供溫暖與隱私', '1張雙人床 + 2張單人床', 5, '附早餐和野餐午餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(230, 'RTC26T02', '標準型營位｜小木屋', 26, 8, 'standard_cabin701.jpg,standard_cabin702.jpg', 9, 6700, '標準小木屋，提供舒適的住宿環境', '1張雙人床 + 1張沙發床', 4, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(231, 'RTC26T03', '豪華型營位｜小木屋', 26, 9, 'luxury_cabin701.jpg,luxury_cabin702.jpg', 7, 9200, '豪華小木屋，享受大自然的同時不失舒適', '1張大號雙人床 + 1張單人床', 3, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(232, 'RTC26B01', '家庭型營位｜帳篷', 26, 10, 'family_tent701.jpg,family_tent702.jpg', 11, 4900, '讓全家享受與大自然的親密接觸', '1張雙人床 + 2張單人床', 4, '附早餐和晚會', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(233, 'RTC26B02', '標準型營位｜帳篷', 26, 11, 'standard_tent701.jpg,standard_tent702.jpg', 10, 6100, '簡約標準帳篷，完美的露營選擇', '1張雙人床', 3, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(234, 'RTC26B03', '豪華型營位｜帳篷', 26, 12, 'luxury_tent701.jpg,luxury_tent702.jpg', 8, 7500, '高端豪華帳篷，為您提供獨特的露營體驗', '1張大號雙人床', 2, '附全餐和私人服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(235, 'RTC27C01', '家庭型營位｜露營車', 27, 4, 'family_rv801.jpg,family_rv802.jpg', 10, 5500, '為全家提供的舒適露營車，讓每個人都能享受大自然', '1張雙人床 + 2張單人床', 5, '附早餐和輕便午餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(236, 'RTC27C02', '標準型營位｜露營車', 27, 5, 'standard_rv801.jpg,standard_rv802.jpg', 8, 6600, '標準露營車，適合小家庭的理想選擇', '1張雙人床 + 1張沙發床', 4, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(237, 'RTC27C03', '豪華型營位｜露營車', 27, 6, 'luxury_rv801.jpg,luxury_rv802.jpg', 6, 8700, '豪華露營車，提供頂級的露營體驗', '1張大號雙人床 + 1張單人床', 4, '附全餐和私人導覽', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(238, 'RTC27T01', '家庭型營位｜小木屋', 27, 7, 'family_cabin801.jpg,family_cabin802.jpg', 10, 5700, '小木屋為家庭提供私密和舒適的住宿', '1張雙人床 + 2張單人床', 5, '附早餐和野餐午餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(239, 'RTC27T02', '標準型營位｜小木屋', 27, 8, 'standard_cabin801.jpg,standard_cabin802.jpg', 9, 6800, '標準小木屋，為露營帶來舒適的居住環境', '1張雙人床 + 1張單人床', 4, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(240, 'RTC27T03', '豪華型營位｜小木屋', 27, 9, 'luxury_cabin801.jpg,luxury_cabin802.jpg', 7, 9300, '豪華小木屋，完美的享受自然和舒適', '1張大號雙人床 + 1張沙發床', 4, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(241, 'RTC27B01', '家庭型營位｜帳篷', 27, 10, 'family_tent801.jpg,family_tent802.jpg', 11, 5000, '為家庭提供的舒適帳篷，親密接觸大自然', '1張雙人床 + 2張單人床', 4, '附早餐和晚會', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(242, 'RTC27B02', '標準型營位｜帳篷', 27, 11, 'standard_tent801.jpg,standard_tent802.jpg', 10, 6200, '簡約的標準帳篷，提供基本的露營需求', '1張雙人床', 3, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(243, 'RTC27B03', '豪華型營位｜帳篷', 27, 12, 'luxury_tent801.jpg,luxury_tent802.jpg', 8, 7600, '高端豪華帳篷，為您帶來獨特的露營享受', '1張大號雙人床', 2, '附全餐和私人服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(244, 'RTC28C01', '家庭型營位｜露營車', 28, 4, 'family_rv901.jpg,family_rv902.jpg', 10, 5600, '適合家庭出遊的露營車，舒適且實用', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(245, 'RTC28C02', '標準型營位｜露營車', 28, 5, 'standard_rv901.jpg,standard_rv902.jpg', 8, 6700, '標準露營車，為小家庭提供舒適的空間', '1張雙人床 + 1張沙發床', 4, '附早餐和輕便午餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(246, 'RTC28C03', '豪華型營位｜露營車', 28, 6, 'luxury_rv901.jpg,luxury_rv902.jpg', 6, 8900, '豪華露營車，提供高端露營體驗', '1張大號雙人床 + 1張單人床', 4, '附全餐和私人導覽', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(247, 'RTC28T01', '家庭型營位｜小木屋', 28, 7, 'family_cabin901.jpg,family_cabin902.jpg', 10, 5800, '家庭小木屋，舒適且私密，適合全家人', '1張雙人床 + 2張單人床', 5, '附早餐和野餐午餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(248, 'RTC28T02', '標準型營位｜小木屋', 28, 8, 'standard_cabin901.jpg,standard_cabin902.jpg', 9, 7000, '標準小木屋，為露營提供便利的住宿選擇', '1張雙人床 + 1張單人床', 4, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(249, 'RTC28T03', '豪華型營位｜小木屋', 28, 9, 'luxury_cabin901.jpg,luxury_cabin902.jpg', 7, 9400, '豪華小木屋，享受自然與舒適的完美結合', '1張大號雙人床 + 1張沙發床', 4, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(250, 'RTC28B01', '家庭型營位｜帳篷', 28, 10, 'family_tent901.jpg,family_tent902.jpg', 11, 5200, '適合家庭的舒適帳篷，享受大自然的親密接觸', '1張雙人床 + 2張單人床', 4, '附早餐和晚會', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(251, 'RTC28B02', '標準型營位｜帳篷', 28, 11, 'standard_tent901.jpg,standard_tent902.jpg', 10, 6400, '標準帳篷，提供基本的露營需求和舒適', '1張雙人床', 3, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(252, 'RTC28B03', '豪華型營位｜帳篷', 28, 12, 'luxury_tent901.jpg,luxury_tent902.jpg', 8, 7800, '高端豪華帳篷，為您帶來獨特的露營享受', '1張大號雙人床', 2, '附全餐和私人服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(253, 'RTC29C01', '家庭型營位｜露營車', 29, 4, 'family_rv903.jpg,family_rv904.jpg', 10, 6000, '適合家庭的露營車，享受舒適與便利', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(254, 'RTC29C02', '標準型營位｜露營車', 29, 5, 'standard_rv903.jpg,standard_rv904.jpg', 8, 7200, '標準露營車，適合小型家庭出行', '1張雙人床 + 1張沙發床', 4, '附早餐和輕便午餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(255, 'RTC29C03', '豪華型營位｜露營車', 29, 6, 'luxury_rv903.jpg,luxury_rv904.jpg', 6, 9500, '豪華露營車，為您帶來極致的露營體驗', '1張大號雙人床 + 1張單人床', 4, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(256, 'RTC29T01', '家庭型營位｜小木屋', 29, 7, 'family_cabin903.jpg,family_cabin904.jpg', 10, 6200, '適合家庭的舒適小木屋，提供良好的私密性', '1張雙人床 + 2張單人床', 5, '附早餐和野餐午餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(257, 'RTC29T02', '標準型營位｜小木屋', 29, 8, 'standard_cabin903.jpg,standard_cabin904.jpg', 9, 7400, '標準小木屋，讓您享受自然的同時擁有便利', '1張雙人床 + 1張單人床', 4, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(258, 'RTC29T03', '豪華型營位｜小木屋', 29, 9, 'luxury_cabin903.jpg,luxury_cabin904.jpg', 7, 9800, '豪華小木屋，結合舒適與自然的完美體驗', '1張大號雙人床 + 1張沙發床', 4, '附全餐和私人導覽', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(259, 'RTC29B01', '家庭型營位｜帳篷', 29, 10, 'family_tent903.jpg,family_tent904.jpg', 11, 5600, '適合家庭的舒適帳篷，享受與自然的親密接觸', '1張雙人床 + 2張單人床', 4, '附早餐和晚會', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(260, 'RTC29B02', '標準型營位｜帳篷', 29, 11, 'standard_tent903.jpg,standard_tent904.jpg', 10, 6800, '標準帳篷，為露營提供基本需求和舒適', '1張雙人床', 3, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(261, 'RTC29B03', '豪華型營位｜帳篷', 29, 12, 'luxury_tent903.jpg,luxury_tent904.jpg', 8, 8200, '高端豪華帳篷，提供獨特的露營享受', '1張大號雙人床', 2, '附全餐和私人服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(262, 'RTC30C01', '家庭型營位｜露營車', 30, 4, 'family_rv101.jpg,family_rv102.jpg', 10, 6300, '適合全家的露營車，提供舒適的住宿環境', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(263, 'RTC30C02', '標準型營位｜露營車', 30, 5, 'standard_rv101.jpg,standard_rv102.jpg', 8, 7500, '標準露營車，適合小家庭使用', '1張雙人床 + 1張沙發床', 4, '附早餐和輕便午餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(264, 'RTC30C03', '豪華型營位｜露營車', 30, 6, 'luxury_rv101.jpg,luxury_rv102.jpg', 6, 9800, '豪華露營車，為您提供最頂級的露營體驗', '1張大號雙人床 + 1張單人床', 4, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(265, 'RTC30T01', '家庭型營位｜小木屋', 30, 7, 'family_cabin101.jpg,family_cabin102.jpg', 10, 6400, '家庭型小木屋，提供溫馨的住宿環境', '1張雙人床 + 2張單人床', 5, '附早餐和野餐午餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(266, 'RTC30T02', '標準型營位｜小木屋', 30, 8, 'standard_cabin101.jpg,standard_cabin102.jpg', 9, 7600, '標準小木屋，舒適與自然完美結合', '1張雙人床 + 1張單人床', 4, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(267, 'RTC30T03', '豪華型營位｜小木屋', 30, 9, 'luxury_cabin101.jpg,luxury_cabin102.jpg', 7, 10000, '豪華小木屋，提供獨特的度假體驗', '1張大號雙人床 + 1張沙發床', 4, '附全餐和私人導覽', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(268, 'RTC30B01', '家庭型營位｜帳篷', 30, 10, 'family_tent101.jpg,family_tent102.jpg', 11, 5800, '適合家庭的帳篷，與自然親密接觸', '1張雙人床 + 2張單人床', 4, '附早餐和晚會', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(269, 'RTC30B02', '標準型營位｜帳篷', 30, 11, 'standard_tent101.jpg,standard_tent102.jpg', 10, 6900, '標準帳篷，滿足基本露營需求', '1張雙人床', 3, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(270, 'RTC30B03', '豪華型營位｜帳篷', 30, 12, 'luxury_tent101.jpg,luxury_tent102.jpg', 8, 8500, '高端豪華帳篷，提供最佳的露營享受', '1張大號雙人床', 2, '附全餐和私人服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(271, 'RTC31C01', '家庭型營位｜露營車', 31, 4, 'family_rv201.jpg,family_rv202.jpg', 10, 6400, '適合家庭的露營車，提供舒適的住宿環境', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(272, 'RTC31C02', '標準型營位｜露營車', 31, 5, 'standard_rv201.jpg,standard_rv202.jpg', 8, 7500, '標準露營車，適合小家庭使用', '1張雙人床 + 1張沙發床', 4, '附早餐和輕便午餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(273, 'RTC31C03', '豪華型營位｜露營車', 31, 6, 'luxury_rv201.jpg,luxury_rv202.jpg', 6, 9500, '豪華露營車，為您提供最頂級的露營體驗', '1張大號雙人床 + 1張單人床', 4, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(274, 'RTC31T01', '家庭型營位｜小木屋', 31, 7, 'family_cabin201.jpg,family_cabin202.jpg', 10, 6200, '家庭型小木屋，提供溫馨的住宿環境', '1張雙人床 + 2張單人床', 5, '附早餐和野餐午餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(275, 'RTC31T02', '標準型營位｜小木屋', 31, 8, 'standard_cabin201.jpg,standard_cabin202.jpg', 9, 7600, '標準小木屋，舒適與自然完美結合', '1張雙人床 + 1張單人床', 4, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(276, 'RTC31T03', '豪華型營位｜小木屋', 31, 9, 'luxury_cabin201.jpg,luxury_cabin202.jpg', 7, 10000, '豪華小木屋，提供獨特的度假體驗', '1張大號雙人床 + 1張沙發床', 4, '附全餐和私人導覽', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(277, 'RTC31B01', '家庭型營位｜帳篷', 31, 10, 'family_tent201.jpg,family_tent202.jpg', 11, 6000, '適合家庭的帳篷，與自然親密接觸', '1張雙人床 + 2張單人床', 4, '附早餐和晚會', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(278, 'RTC31B02', '標準型營位｜帳篷', 31, 11, 'standard_tent201.jpg,standard_tent202.jpg', 10, 6900, '標準帳篷，滿足基本露營需求', '1張雙人床', 3, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(279, 'RTC31B03', '豪華型營位｜帳篷', 31, 12, 'luxury_tent201.jpg,luxury_tent202.jpg', 8, 8500, '高端豪華帳篷，提供最佳的露營享受', '1張大號雙人床', 2, '附全餐和私人服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(280, 'RTC32C01', '家庭型營位｜露營車', 32, 4, 'family_rv301.jpg,family_rv302.jpg', 10, 6500, '適合家庭的露營車，提供舒適的自然環境', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(281, 'RTC32C02', '標準型營位｜露營車', 32, 5, 'standard_rv301.jpg,standard_rv302.jpg', 8, 7200, '標準露營車，適合小家庭使用', '1張雙人床 + 1張沙發床', 4, '附早餐和簡餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(282, 'RTC32C03', '豪華型營位｜露營車', 32, 6, 'luxury_rv301.jpg,luxury_rv302.jpg', 6, 9600, '豪華露營車，為您提供頂級的露營體驗', '1張大號雙人床 + 1張單人床', 4, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(283, 'RTC32T01', '家庭型營位｜小木屋', 32, 7, 'family_cabin301.jpg,family_cabin302.jpg', 10, 6300, '適合家庭的溫馨小木屋', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(284, 'RTC32T02', '標準型營位｜小木屋', 32, 8, 'standard_cabin301.jpg,standard_cabin302.jpg', 9, 7600, '標準小木屋，適合情侶或小家庭', '1張雙人床 + 1張沙發床', 4, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(285, 'RTC32T03', '豪華型營位｜小木屋', 32, 9, 'luxury_cabin301.jpg,luxury_cabin302.jpg', 7, 9900, '豪華小木屋，提供舒適且奢華的住宿體驗', '1張大號雙人床', 4, '附全餐和私人服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(286, 'RTC32B01', '家庭型營位｜帳篷', 32, 10, 'family_tent301.jpg,family_tent302.jpg', 11, 6100, '親近自然的家庭帳篷，享受戶外的美好', '1張雙人床 + 2張單人床', 4, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(287, 'RTC32B02', '標準型營位｜帳篷', 32, 11, 'standard_tent301.jpg,standard_tent302.jpg', 10, 7000, '標準帳篷，為露營愛好者提供舒適的住宿', '1張雙人床', 3, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(288, 'RTC32B03', '豪華型營位｜帳篷', 32, 12, 'luxury_tent301.jpg,luxury_tent302.jpg', 8, 8600, '豪華帳篷，讓您享受五星級的露營體驗', '1張大號雙人床', 2, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(289, 'RTC33C01', '家庭型營位｜露營車', 33, 4, 'family_rv401.jpg,family_rv402.jpg', 10, 6700, '適合家庭的露營車，讓您享受大自然的美好', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(290, 'RTC33C02', '標準型營位｜露營車', 33, 5, 'standard_rv401.jpg,standard_rv402.jpg', 8, 7400, '標準露營車，適合小家庭使用', '1張雙人床 + 1張沙發床', 4, '附早餐和簡餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(291, 'RTC33C03', '豪華型營位｜露營車', 33, 6, 'luxury_rv401.jpg,luxury_rv402.jpg', 6, 9800, '豪華露營車，為您提供頂級的露營體驗', '1張大號雙人床 + 1張單人床', 4, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(292, 'RTC33T01', '家庭型營位｜小木屋', 33, 7, 'family_cabin401.jpg,family_cabin402.jpg', 10, 6400, '適合家庭的溫馨小木屋', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(293, 'RTC33T02', '標準型營位｜小木屋', 33, 8, 'standard_cabin401.jpg,standard_cabin402.jpg', 9, 7700, '標準小木屋，適合情侶或小家庭', '1張雙人床 + 1張沙發床', 4, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(294, 'RTC33T03', '豪華型營位｜小木屋', 33, 9, 'luxury_cabin401.jpg,luxury_cabin402.jpg', 7, 10000, '豪華小木屋，提供舒適且奢華的住宿體驗', '1張大號雙人床', 4, '附全餐和私人服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(295, 'RTC33B01', '家庭型營位｜帳篷', 33, 10, 'family_tent401.jpg,family_tent402.jpg', 11, 6200, '親近自然的家庭帳篷，享受戶外的美好', '1張雙人床 + 2張單人床', 4, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(296, 'RTC33B02', '標準型營位｜帳篷', 33, 11, 'standard_tent401.jpg,standard_tent402.jpg', 10, 7100, '標準帳篷，為露營愛好者提供舒適的住宿', '1張雙人床', 3, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(297, 'RTC33B03', '豪華型營位｜帳篷', 33, 12, 'luxury_tent401.jpg,luxury_tent402.jpg', 8, 8700, '豪華帳篷，讓您享受五星級的露營體驗', '1張大號雙人床', 2, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(298, 'RTC34C01', '家庭型營位｜露營車', 34, 4, 'family_rv403.jpg,family_rv404.jpg', 10, 6800, '家庭適用的露營車，舒適且便利', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(299, 'RTC34C02', '標準型營位｜露營車', 34, 5, 'standard_rv403.jpg,standard_rv404.jpg', 8, 7500, '標準露營車，適合小家庭和朋友', '1張雙人床 + 1張沙發床', 4, '附早餐和簡餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(300, 'RTC34C03', '豪華型營位｜露營車', 34, 6, 'luxury_rv403.jpg,luxury_rv404.jpg', 6, 9900, '豪華露營車，為您提供一流的露營體驗', '1張大號雙人床 + 1張單人床', 4, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(301, 'RTC34T01', '家庭型營位｜小木屋', 34, 7, 'family_cabin403.jpg,family_cabin404.jpg', 10, 6500, '適合全家的溫馨小木屋，適合親子旅遊', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(302, 'RTC34T02', '標準型營位｜小木屋', 34, 8, 'standard_cabin403.jpg,standard_cabin404.jpg', 9, 7800, '標準小木屋，為情侶或小家庭提供舒適的住宿', '1張雙人床 + 1張沙發床', 4, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(303, 'RTC34T03', '豪華型營位｜小木屋', 34, 9, 'luxury_cabin403.jpg,luxury_cabin404.jpg', 7, 10200, '豪華小木屋，享受奢華的住宿體驗', '1張大號雙人床', 4, '附全餐和私人服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(304, 'RTC34B01', '家庭型營位｜帳篷', 34, 10, 'family_tent403.jpg,family_tent404.jpg', 11, 6300, '家庭帳篷，親近大自然，享受家庭時光', '1張雙人床 + 2張單人床', 4, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(305, 'RTC34B02', '標準型營位｜帳篷', 34, 11, 'standard_tent403.jpg,standard_tent404.jpg', 10, 7200, '標準帳篷，為喜愛露營的人士提供舒適的住宿', '1張雙人床', 3, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(306, 'RTC34B03', '豪華型營位｜帳篷', 34, 12, 'luxury_tent403.jpg,luxury_tent404.jpg', 8, 8900, '豪華帳篷，讓您享受高端露營體驗', '1張大號雙人床', 2, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(307, 'RTC35C01', '家庭型營位｜露營車', 35, 4, 'family_rv501.jpg,family_rv502.jpg', 10, 7000, '家庭專用的露營車，舒適且適合長途旅行', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(308, 'RTC35C02', '標準型營位｜露營車', 35, 5, 'standard_rv501.jpg,standard_rv502.jpg', 8, 7700, '標準露營車，為小型家庭提供便利的住宿', '1張雙人床 + 1張沙發床', 4, '附早餐和簡餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(309, 'RTC35C03', '豪華型營位｜露營車', 35, 6, 'luxury_rv501.jpg,luxury_rv502.jpg', 6, 10100, '豪華露營車，配備所有必要的設施', '1張大號雙人床 + 1張單人床', 4, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(310, 'RTC35T01', '家庭型營位｜小木屋', 35, 7, 'family_cabin501.jpg,family_cabin502.jpg', 10, 6800, '溫馨的小木屋，適合全家人共度假期', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(311, 'RTC35T02', '標準型營位｜小木屋', 35, 8, 'standard_cabin501.jpg,standard_cabin502.jpg', 9, 8000, '舒適的小木屋，適合情侶或小家庭', '1張雙人床 + 1張沙發床', 4, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(312, 'RTC35T03', '豪華型營位｜小木屋', 35, 9, 'luxury_cabin501.jpg,luxury_cabin502.jpg', 7, 10500, '豪華小木屋，享受奢華的自然體驗', '1張大號雙人床', 4, '附全餐和私人服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(313, 'RTC35B01', '家庭型營位｜帳篷', 35, 10, 'family_tent501.jpg,family_tent502.jpg', 11, 6500, '家庭帳篷，適合享受戶外時光', '1張雙人床 + 2張單人床', 4, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(314, 'RTC35B02', '標準型營位｜帳篷', 35, 11, 'standard_tent501.jpg,standard_tent502.jpg', 10, 7300, '標準帳篷，為喜愛露營的人士提供舒適住宿', '1張雙人床', 3, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(315, 'RTC35B03', '豪華型營位｜帳篷', 35, 12, 'luxury_tent501.jpg,luxury_tent502.jpg', 8, 9200, '豪華帳篷，享受高端的露營體驗', '1張大號雙人床', 2, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(316, 'RTC36C01', '家庭型營位｜露營車', 36, 4, 'family_rv601.jpg,family_rv602.jpg', 10, 7200, '寬敞的家庭露營車，為您提供舒適的戶外體驗', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(317, 'RTC36C02', '標準型營位｜露營車', 36, 5, 'standard_rv601.jpg,standard_rv602.jpg', 8, 7900, '適合小家庭的標準露營車，方便實用', '1張雙人床 + 1張沙發床', 4, '附早餐和簡餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(318, 'RTC36C03', '豪華型營位｜露營車', 36, 6, 'luxury_rv601.jpg,luxury_rv602.jpg', 6, 10500, '高端豪華露營車，讓您享受最佳的露營體驗', '1張大號雙人床 + 1張單人床', 4, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(319, 'RTC36T01', '家庭型營位｜小木屋', 36, 7, 'family_cabin601.jpg,family_cabin602.jpg', 10, 6700, '溫暖的小木屋，適合全家人一起享受假期', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(320, 'RTC36T02', '標準型營位｜小木屋', 36, 8, 'standard_cabin601.jpg,standard_cabin602.jpg', 9, 7200, '舒適的標準小木屋，為您提供完美的住宿', '1張雙人床 + 1張沙發床', 4, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(321, 'RTC36T03', '豪華型營位｜小木屋', 36, 9, 'luxury_cabin601.jpg,luxury_cabin602.jpg', 7, 11000, '奢華小木屋，讓您的露營體驗更上層樓', '1張大號雙人床', 4, '附全餐和私人服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(322, 'RTC36B01', '家庭型營位｜帳篷', 36, 10, 'family_tent601.jpg,family_tent602.jpg', 11, 6400, '舒適的家庭帳篷，讓您享受自然的同時保持舒適', '1張雙人床 + 2張單人床', 4, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(323, 'RTC36B02', '標準型營位｜帳篷', 36, 11, 'standard_tent601.jpg,standard_tent602.jpg', 10, 7000, '適合露營的標準帳篷，提供良好的住宿條件', '1張雙人床', 3, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(324, 'RTC36B03', '豪華型營位｜帳篷', 36, 12, 'luxury_tent601.jpg,luxury_tent602.jpg', 8, 9500, '豪華帳篷，為您提供高端的露營體驗', '1張大號雙人床', 2, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(325, 'RTC37C01', '家庭型營位｜露營車', 37, 4, 'family_rv701.jpg,family_rv702.jpg', 10, 7500, '舒適寬敞的家庭露營車，完美適合全家出遊', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(326, 'RTC37C02', '標準型營位｜露營車', 37, 5, 'standard_rv701.jpg,standard_rv702.jpg', 8, 8000, '實用的標準露營車，讓您體驗大自然的魅力', '1張雙人床 + 1張沙發床', 4, '附早餐和簡餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(327, 'RTC37C03', '豪華型營位｜露營車', 37, 6, 'luxury_rv701.jpg,luxury_rv702.jpg', 6, 10500, '高端豪華露營車，讓您在大自然中享受奢華', '1張大號雙人床 + 1張單人床', 4, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(328, 'RTC37T01', '家庭型營位｜小木屋', 37, 7, 'family_cabin701.jpg,family_cabin702.jpg', 10, 6800, '適合家庭的溫馨小木屋，讓您享受親子時光', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(329, 'RTC37T02', '標準型營位｜小木屋', 37, 8, 'standard_cabin701.jpg,standard_cabin702.jpg', 9, 7300, '舒適的標準小木屋，適合小型家庭使用', '1張雙人床 + 1張沙發床', 4, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(330, 'RTC37T03', '豪華型營位｜小木屋', 37, 9, 'luxury_cabin701.jpg,luxury_cabin702.jpg', 7, 11500, '豪華小木屋，提供您最好的露營體驗', '1張大號雙人床', 4, '附全餐和私人服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(331, 'RTC37B01', '家庭型營位｜帳篷', 37, 10, 'family_tent701.jpg,family_tent702.jpg', 11, 6500, '舒適的家庭帳篷，讓您享受自然的美好', '1張雙人床 + 2張單人床', 4, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(332, 'RTC37B02', '標準型營位｜帳篷', 37, 11, 'standard_tent701.jpg,standard_tent702.jpg', 10, 7200, '標準帳篷，為您提供良好的住宿環境', '1張雙人床', 3, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(333, 'RTC37B03', '豪華型營位｜帳篷', 37, 12, 'luxury_tent701.jpg,luxury_tent702.jpg', 8, 9800, '豪華帳篷，讓您在露營中也能享受高端服務', '1張大號雙人床', 2, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(334, 'RTC38C01', '家庭型營位｜露營車', 38, 4, 'family_rv801.jpg,family_rv802.jpg', 10, 7800, '舒適的家庭露營車，讓您與家人一起享受自然', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(335, 'RTC38C02', '標準型營位｜露營車', 38, 5, 'standard_rv801.jpg,standard_rv802.jpg', 8, 8300, '現代設計的標準露營車，讓您輕鬆享受大自然', '1張雙人床 + 1張沙發床', 4, '附早餐和簡餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(336, 'RTC38C03', '豪華型營位｜露營車', 38, 6, 'luxury_rv801.jpg,luxury_rv802.jpg', 6, 11000, '高端露營車，提供奢華的露營體驗', '1張大號雙人床 + 1張單人床', 4, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(337, 'RTC38T01', '家庭型營位｜小木屋', 38, 7, 'family_cabin801.jpg,family_cabin802.jpg', 10, 7000, '適合全家的溫馨小木屋，讓您享受舒適住宿', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(338, 'RTC38T02', '標準型營位｜小木屋', 38, 8, 'standard_cabin801.jpg,standard_cabin802.jpg', 9, 7500, '實用的小木屋，讓您輕鬆體驗露營樂趣', '1張雙人床 + 1張沙發床', 4, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(339, 'RTC38T03', '豪華型營位｜小木屋', 38, 9, 'luxury_cabin801.jpg,luxury_cabin802.jpg', 7, 12000, '豪華小木屋，讓您享受高端露營服務', '1張大號雙人床', 4, '附全餐和私人服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(340, 'RTC38B01', '家庭型營位｜帳篷', 38, 10, 'family_tent801.jpg,family_tent802.jpg', 11, 6800, '適合家庭的舒適帳篷，享受大自然的美好', '1張雙人床 + 2張單人床', 4, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(341, 'RTC38B02', '標準型營位｜帳篷', 38, 11, 'standard_tent801.jpg,standard_tent802.jpg', 10, 7300, '標準帳篷，讓您在戶外享受舒適住宿', '1張雙人床', 3, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(342, 'RTC38B03', '豪華型營位｜帳篷', 38, 12, 'luxury_tent801.jpg,luxury_tent802.jpg', 8, 10000, '豪華帳篷，提供您最好的露營體驗', '1張大號雙人床', 2, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(343, 'RTC39C01', '家庭型營位｜露營車', 39, 4, 'family_rv901.jpg,family_rv902.jpg', 10, 8000, '適合家庭的露營車，提供舒適的住宿體驗', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(344, 'RTC39C02', '標準型營位｜露營車', 39, 5, 'standard_rv901.jpg,standard_rv902.jpg', 8, 8500, '標準露營車，讓您享受露營的樂趣', '1張雙人床 + 1張沙發床', 4, '附早餐和簡餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(345, 'RTC39C03', '豪華型營位｜露營車', 39, 6, 'luxury_rv901.jpg,luxury_rv902.jpg', 6, 11500, '高級露營車，提供最舒適的露營體驗', '1張大號雙人床 + 1張單人床', 4, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(346, 'RTC39T01', '家庭型營位｜小木屋', 39, 7, 'family_cabin901.jpg,family_cabin902.jpg', 10, 7200, '溫馨的小木屋，適合全家人居住', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(347, 'RTC39T02', '標準型營位｜小木屋', 39, 8, 'standard_cabin901.jpg,standard_cabin902.jpg', 9, 7700, '實用的小木屋，讓您體驗露營的魅力', '1張雙人床 + 1張沙發床', 4, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(348, 'RTC39T03', '豪華型營位｜小木屋', 39, 9, 'luxury_cabin901.jpg,luxury_cabin902.jpg', 7, 12500, '豪華小木屋，為您提供最佳的住宿體驗', '1張大號雙人床', 4, '附全餐和私人服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(349, 'RTC39B01', '家庭型營位｜帳篷', 39, 10, 'family_tent901.jpg,family_tent902.jpg', 11, 6900, '舒適的家庭帳篷，讓您享受戶外樂趣', '1張雙人床 + 2張單人床', 4, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(350, 'RTC39B02', '標準型營位｜帳篷', 39, 11, 'standard_tent901.jpg,standard_tent902.jpg', 10, 7400, '標準帳篷，提供舒適的露營體驗', '1張雙人床', 3, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(351, 'RTC39B03', '豪華型營位｜帳篷', 39, 12, 'luxury_tent901.jpg,luxury_tent902.jpg', 8, 10500, '豪華帳篷，為您提供難忘的露營體驗', '1張大號雙人床', 2, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(352, 'RTC40C01', '家庭型營位｜露營車', 40, 4, 'family_rv901.jpg,family_rv902.jpg', 10, 8200, '適合家庭的露營車，提供寬敞舒適的住宿環境', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(353, 'RTC40C02', '標準型營位｜露營車', 40, 5, 'standard_rv901.jpg,standard_rv902.jpg', 8, 8700, '標準露營車，設計簡約卻不失舒適', '1張雙人床 + 1張沙發床', 4, '附早餐和簡餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(354, 'RTC40C03', '豪華型營位｜露營車', 40, 6, 'luxury_rv901.jpg,luxury_rv902.jpg', 6, 11800, '豪華露營車，為您提供最高級的露營體驗', '1張大號雙人床 + 1張單人床', 4, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(355, 'RTC40T01', '家庭型營位｜小木屋', 40, 7, 'family_cabin901.jpg,family_cabin902.jpg', 10, 7400, '溫暖的小木屋，讓您享受與家人一起的舒適時光', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(356, 'RTC40T02', '標準型營位｜小木屋', 40, 8, 'standard_cabin901.jpg,standard_cabin902.jpg', 9, 7900, '功能性的小木屋，提供完美的露營體驗', '1張雙人床 + 1張沙發床', 4, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(357, 'RTC40T03', '豪華型營位｜小木屋', 40, 9, 'luxury_cabin901.jpg,luxury_cabin902.jpg', 7, 12800, '奢華的小木屋，提供無與倫比的舒適感', '1張大號雙人床', 4, '附全餐和私人服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(358, 'RTC40B01', '家庭型營位｜帳篷', 40, 10, 'family_tent901.jpg,family_tent902.jpg', 11, 7100, '舒適的家庭帳篷，適合戶外的家庭聚會', '1張雙人床 + 2張單人床', 4, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(359, 'RTC40B02', '標準型營位｜帳篷', 40, 11, 'standard_tent901.jpg,standard_tent902.jpg', 10, 7600, '標準帳篷，提供便捷舒適的住宿', '1張雙人床', 3, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(360, 'RTC40B03', '豪華型營位｜帳篷', 40, 12, 'luxury_tent901.jpg,luxury_tent902.jpg', 8, 10800, '奢華帳篷，為您提供舒適的露營體驗', '1張大號雙人床', 2, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(361, 'RTC41C01', '家庭型營位｜露營車', 41, 4, 'family_rv101.jpg,family_rv102.jpg', 10, 8400, '適合全家人的露營車，寬敞舒適，讓您享受假期', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(362, 'RTC41C02', '標準型營位｜露營車', 41, 5, 'standard_rv101.jpg,standard_rv102.jpg', 8, 8900, '標準露營車，設計實用，讓您輕鬆享受露營生活', '1張雙人床 + 1張沙發床', 4, '附早餐和簡餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(363, 'RTC41C03', '豪華型營位｜露營車', 41, 6, 'luxury_rv101.jpg,luxury_rv102.jpg', 6, 12300, '豪華露營車，為您提供最高級的露營體驗', '1張大號雙人床 + 1張單人床', 4, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(364, 'RTC41T01', '家庭型營位｜小木屋', 41, 7, 'family_cabin101.jpg,family_cabin102.jpg', 10, 7700, '溫馨的小木屋，讓您和家人享受舒適的露營時光', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(365, 'RTC41T02', '標準型營位｜小木屋', 41, 8, 'standard_cabin101.jpg,standard_cabin102.jpg', 9, 8200, '舒適的小木屋，為您提供完美的露營體驗', '1張雙人床 + 1張沙發床', 4, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(366, 'RTC41T03', '豪華型營位｜小木屋', 41, 9, 'luxury_cabin101.jpg,luxury_cabin102.jpg', 7, 13200, '奢華的小木屋，提供無與倫比的舒適感', '1張大號雙人床', 4, '附全餐和私人服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(367, 'RTC41B01', '家庭型營位｜帳篷', 41, 10, 'family_tent101.jpg,family_tent102.jpg', 11, 7400, '舒適的家庭帳篷，適合戶外的家庭聚會', '1張雙人床 + 2張單人床', 4, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(368, 'RTC41B02', '標準型營位｜帳篷', 41, 11, 'standard_tent101.jpg,standard_tent102.jpg', 10, 7900, '標準帳篷，提供便捷舒適的住宿', '1張雙人床', 3, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(369, 'RTC41B03', '豪華型營位｜帳篷', 41, 12, 'luxury_tent101.jpg,luxury_tent102.jpg', 8, 11100, '奢華帳篷，為您提供舒適的露營體驗', '1張大號雙人床', 2, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(370, 'RTC42C01', '家庭型營位｜露營車', 42, 4, 'family_rv201.jpg,family_rv202.jpg', 12, 8500, '寬敞的家庭露營車，適合家庭出遊', '1張雙人床 + 2張單人床', 5, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(371, 'RTC42C02', '標準型營位｜露營車', 42, 5, 'standard_rv201.jpg,standard_rv202.jpg', 10, 9000, '實用的標準露營車，讓您輕鬆享受露營樂趣', '1張雙人床 + 1張單人床', 4, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(372, 'RTC42C03', '豪華型營位｜露營車', 42, 6, 'luxury_rv201.jpg,luxury_rv202.jpg', 8, 12500, '豪華露營車，給您最好的露營體驗', '1張大號雙人床', 3, '附全餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(373, 'RTC42T01', '家庭型營位｜小木屋', 42, 7, 'family_cabin201.jpg,family_cabin202.jpg', 12, 7800, '舒適的小木屋，為家庭提供完美的居住空間', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(374, 'RTC42T02', '標準型營位｜小木屋', 42, 8, 'standard_cabin201.jpg,standard_cabin202.jpg', 10, 8300, '標準小木屋，帶來輕鬆愉快的露營體驗', '1張雙人床 + 1張沙發床', 4, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(375, 'RTC42T03', '豪華型營位｜小木屋', 42, 9, 'luxury_cabin201.jpg,luxury_cabin202.jpg', 9, 13500, '奢華小木屋，提供無與倫比的舒適感', '1張大號雙人床', 3, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(376, 'RTC42B01', '家庭型營位｜帳篷', 42, 10, 'family_tent201.jpg,family_tent202.jpg', 10, 7500, '寬敞的家庭帳篷，適合家庭聚會', '1張雙人床 + 2張單人床', 5, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(377, 'RTC42B02', '標準型營位｜帳篷', 42, 11, 'standard_tent201.jpg,standard_tent202.jpg', 9, 8000, '標準帳篷，適合各種戶外活動', '1張雙人床', 3, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(378, 'RTC42B03', '豪華型營位｜帳篷', 42, 12, 'luxury_tent201.jpg,luxury_tent202.jpg', 8, 11500, '豪華帳篷，提供舒適的露營體驗', '1張大號雙人床', 2, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(379, 'RTC43C01', '家庭型營位｜露營車', 43, 4, 'family_rv301.jpg,family_rv302.jpg', 15, 8800, '適合家庭的寬敞露營車，提供舒適的休息空間', '1張雙人床 + 2張單人床', 6, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(380, 'RTC43C02', '標準型營位｜露營車', 43, 5, 'standard_rv301.jpg,standard_rv302.jpg', 12, 9300, '舒適的標準露營車，讓您享受完美的露營體驗', '1張雙人床 + 1張沙發床', 5, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(381, 'RTC43C03', '豪華型營位｜露營車', 43, 6, 'luxury_rv301.jpg,luxury_rv302.jpg', 8, 13000, '奢華露營車，提供極致的舒適感受', '1張大號雙人床', 3, '附全餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(382, 'RTC43T01', '家庭型營位｜小木屋', 43, 7, 'family_cabin301.jpg,family_cabin302.jpg', 12, 7900, '溫馨的小木屋，為家庭提供理想的住宿選擇', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(383, 'RTC43T02', '標準型營位｜小木屋', 43, 8, 'standard_cabin301.jpg,standard_cabin302.jpg', 10, 8400, '實用的標準小木屋，適合各類型的露營客', '1張雙人床 + 1張單人床', 4, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(384, 'RTC43T03', '豪華型營位｜小木屋', 43, 9, 'luxury_cabin301.jpg,luxury_cabin302.jpg', 9, 14000, '極致豪華的小木屋，提供最高品質的露營體驗', '1張大號雙人床', 3, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(385, 'RTC43B01', '家庭型營位｜帳篷', 43, 10, 'family_tent301.jpg,family_tent302.jpg', 10, 7600, '寬敞的家庭帳篷，適合家庭聚會和戶外活動', '1張雙人床 + 2張單人床', 5, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(386, 'RTC43B02', '標準型營位｜帳篷', 43, 11, 'standard_tent301.jpg,standard_tent302.jpg', 9, 8100, '標準帳篷，提供良好的住宿條件', '1張雙人床', 3, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(387, 'RTC43B03', '豪華型營位｜帳篷', 43, 12, 'luxury_tent301.jpg,luxury_tent302.jpg', 8, 11800, '豪華帳篷，為您提供獨特的露營體驗', '1張大號雙人床', 2, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(388, 'RTC44C01', '家庭型營位｜露營車', 44, 4, 'family_rv401.jpg,family_rv402.jpg', 12, 9000, '適合家庭的寬敞露營車，讓您享受家庭時光', '1張雙人床 + 2張單人床', 6, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(389, 'RTC44C02', '標準型營位｜露營車', 44, 5, 'standard_rv401.jpg,standard_rv402.jpg', 10, 9500, '舒適的標準露營車，讓您擁有愉快的露營經驗', '1張雙人床 + 1張沙發床', 4, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(390, 'RTC44C03', '豪華型營位｜露營車', 44, 6, 'luxury_rv401.jpg,luxury_rv402.jpg', 8, 13500, '豪華露營車，提供舒適的住宿和豪華的享受', '1張大號雙人床', 3, '附全餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(391, 'RTC44T01', '家庭型營位｜小木屋', 44, 7, 'family_cabin401.jpg,family_cabin402.jpg', 12, 8200, '溫暖的小木屋，適合家庭聚會和休閒活動', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(392, 'RTC44T02', '標準型營位｜小木屋', 44, 8, 'standard_cabin401.jpg,standard_cabin402.jpg', 10, 8700, '實用的標準小木屋，適合各類型的露營客', '1張雙人床 + 1張單人床', 4, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(393, 'RTC44T03', '豪華型營位｜小木屋', 44, 9, 'luxury_cabin401.jpg,luxury_cabin402.jpg', 9, 14500, '奢華的小木屋，提供高品質的露營體驗', '1張大號雙人床', 3, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(394, 'RTC44B01', '家庭型營位｜帳篷', 44, 10, 'family_tent401.jpg,family_tent402.jpg', 10, 7800, '寬敞的家庭帳篷，適合各種戶外活動', '1張雙人床 + 2張單人床', 5, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(395, 'RTC44B02', '標準型營位｜帳篷', 44, 11, 'standard_tent401.jpg,standard_tent402.jpg', 9, 8300, '標準帳篷，提供舒適的住宿條件', '1張雙人床', 3, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(396, 'RTC44B03', '豪華型營位｜帳篷', 44, 12, 'luxury_tent401.jpg,luxury_tent402.jpg', 8, 12000, '豪華帳篷，為您提供獨特的露營體驗', '1張大號雙人床', 2, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(397, 'RTC45C01', '家庭型營位｜露營車', 45, 4, 'family_rv4501.jpg,family_rv4502.jpg', 10, 9200, '適合家庭的寬敞露營車，讓您享受溫馨的時光', '1張雙人床 + 2張單人床', 6, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(398, 'RTC45C02', '標準型營位｜露營車', 45, 5, 'standard_rv4501.jpg,standard_rv4502.jpg', 8, 9800, '舒適的標準露營車，讓您擁有愉快的露營經驗', '1張雙人床 + 1張沙發床', 4, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(399, 'RTC45C03', '豪華型營位｜露營車', 45, 6, 'luxury_rv4501.jpg,luxury_rv4502.jpg', 6, 14000, '豪華露營車，提供舒適的住宿和奢華享受', '1張大號雙人床', 3, '附全餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(400, 'RTC45T01', '家庭型營位｜小木屋', 45, 7, 'family_cabin4501.jpg,family_cabin4502.jpg', 12, 8500, '溫暖的小木屋，適合家庭聚會和休閒活動', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(401, 'RTC45T02', '標準型營位｜小木屋', 45, 8, 'standard_cabin4501.jpg,standard_cabin4502.jpg', 10, 9000, '實用的標準小木屋，適合各類型的露營客', '1張雙人床 + 1張單人床', 4, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(402, 'RTC45T03', '豪華型營位｜小木屋', 45, 9, 'luxury_cabin4501.jpg,luxury_cabin4502.jpg', 8, 15000, '奢華的小木屋，提供高品質的露營體驗', '1張大號雙人床', 3, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(403, 'RTC45B01', '家庭型營位｜帳篷', 45, 10, 'family_tent4501.jpg,family_tent4502.jpg', 10, 8000, '寬敞的家庭帳篷，適合各種戶外活動', '1張雙人床 + 2張單人床', 5, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(404, 'RTC45B02', '標準型營位｜帳篷', 45, 11, 'standard_tent4501.jpg,standard_tent4502.jpg', 9, 8500, '標準帳篷，提供舒適的住宿條件', '1張雙人床', 3, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(405, 'RTC45B03', '豪華型營位｜帳篷', 45, 12, 'luxury_tent4501.jpg,luxury_tent4502.jpg', 8, 12500, '豪華帳篷，為您提供獨特的露營體驗', '1張大號雙人床', 2, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(406, 'RTC46C01', '家庭型營位｜露營車', 46, 4, 'family_rv4601.jpg,family_rv4602.jpg', 10, 9400, '適合全家的露營車，提供舒適的住宿環境', '1張雙人床 + 2張單人床', 6, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(407, 'RTC46C02', '標準型營位｜露營車', 46, 5, 'standard_rv4601.jpg,standard_rv4602.jpg', 8, 9900, '經典的標準露營車，讓您享受大自然', '1張雙人床 + 1張沙發床', 4, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(408, 'RTC46C03', '豪華型營位｜露營車', 46, 6, 'luxury_rv4601.jpg,luxury_rv4602.jpg', 6, 14200, '豪華露營車，提供極致的舒適和奢華', '1張大號雙人床', 3, '附全餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(409, 'RTC46T01', '家庭型營位｜小木屋', 46, 7, 'family_cabin4601.jpg,family_cabin4602.jpg', 12, 8700, '溫馨的小木屋，適合家庭聚會', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(410, 'RTC46T02', '標準型營位｜小木屋', 46, 8, 'standard_cabin4601.jpg,standard_cabin4602.jpg', 10, 9200, '標準小木屋，提供良好的住宿體驗', '1張雙人床 + 1張單人床', 4, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(411, 'RTC46T03', '豪華型營位｜小木屋', 46, 9, 'luxury_cabin4601.jpg,luxury_cabin4602.jpg', 8, 15500, '高檔的小木屋，適合奢華露營', '1張大號雙人床', 3, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(412, 'RTC46B01', '家庭型營位｜帳篷', 46, 10, 'family_tent4601.jpg,family_tent4602.jpg', 10, 8200, '寬敞的家庭帳篷，適合各種活動', '1張雙人床 + 2張單人床', 5, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(413, 'RTC46B02', '標準型營位｜帳篷', 46, 11, 'standard_tent4601.jpg,standard_tent4602.jpg', 9, 8600, '標準帳篷，為您提供舒適的住宿', '1張雙人床', 3, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(414, 'RTC46B03', '豪華型營位｜帳篷', 46, 12, 'luxury_tent4601.jpg,luxury_tent4602.jpg', 8, 12800, '奢華帳篷，帶來獨特的露營體驗', '1張大號雙人床', 2, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(415, 'RTC47C01', '家庭型營位｜露營車', 47, 4, 'family_rv4701.jpg,family_rv4702.jpg', 10, 9500, '全家共享的舒適露營車，配備完善設施', '1張雙人床 + 2張單人床', 6, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(416, 'RTC47C02', '標準型營位｜露營車', 47, 5, 'standard_rv4701.jpg,standard_rv4702.jpg', 8, 9900, '標準露營車，讓您在大自然中放鬆', '1張雙人床 + 1張沙發床', 4, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(417, 'RTC47C03', '豪華型營位｜露營車', 47, 6, 'luxury_rv4701.jpg,luxury_rv4702.jpg', 6, 14500, '高端露營車，為您提供奢華的住宿體驗', '1張大號雙人床', 3, '附全餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(418, 'RTC47T01', '家庭型營位｜小木屋', 47, 7, 'family_cabin4701.jpg,family_cabin4702.jpg', 12, 8800, '適合家庭的溫暖小木屋，讓您放鬆身心', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(419, 'RTC47T02', '標準型營位｜小木屋', 47, 8, 'standard_cabin4701.jpg,standard_cabin4702.jpg', 10, 9300, '經典小木屋，提供舒適的住宿選擇', '1張雙人床 + 1張單人床', 4, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(420, 'RTC47T03', '豪華型營位｜小木屋', 47, 9, 'luxury_cabin4701.jpg,luxury_cabin4702.jpg', 8, 15800, '奢華的小木屋，適合浪漫露營', '1張大號雙人床', 3, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(421, 'RTC47B01', '家庭型營位｜帳篷', 47, 10, 'family_tent4701.jpg,family_tent4702.jpg', 10, 8300, '寬敞的家庭帳篷，適合各種戶外活動', '1張雙人床 + 2張單人床', 5, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(422, 'RTC47B02', '標準型營位｜帳篷', 47, 11, 'standard_tent4701.jpg,standard_tent4702.jpg', 9, 8700, '標準帳篷，為您提供舒適的住宿環境', '1張雙人床', 3, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(423, 'RTC47B03', '豪華型營位｜帳篷', 47, 12, 'luxury_tent4701.jpg,luxury_tent4702.jpg', 8, 13000, '奢華帳篷，帶來獨特的露營體驗', '1張大號雙人床', 2, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(424, 'RTC48C01', '家庭型營位｜露營車', 48, 4, 'family_rv4801.jpg,family_rv4802.jpg', 10, 9500, '舒適的家庭露營車，適合全家出遊', '1張雙人床 + 2張單人床', 6, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(425, 'RTC48C02', '標準型營位｜露營車', 48, 5, 'standard_rv4801.jpg,standard_rv4802.jpg', 8, 9900, '標準露營車，享受舒適的戶外體驗', '1張雙人床 + 1張沙發床', 4, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(426, 'RTC48C03', '豪華型營位｜露營車', 48, 6, 'luxury_rv4801.jpg,luxury_rv4802.jpg', 6, 14500, '豪華露營車，給您不一樣的奢華體驗', '1張大號雙人床', 3, '附全餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(427, 'RTC48T01', '家庭型營位｜小木屋', 48, 7, 'family_cabin4801.jpg,family_cabin4802.jpg', 12, 8800, '溫馨的小木屋，適合家庭共度時光', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(428, 'RTC48T02', '標準型營位｜小木屋', 48, 8, 'standard_cabin4801.jpg,standard_cabin4802.jpg', 10, 9300, '經典小木屋，為您提供舒適的住宿', '1張雙人床 + 1張單人床', 4, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(429, 'RTC48T03', '豪華型營位｜小木屋', 48, 9, 'luxury_cabin4801.jpg,luxury_cabin4802.jpg', 8, 15800, '奢華的小木屋，讓您的露營體驗更加完美', '1張大號雙人床', 3, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(430, 'RTC48B01', '家庭型營位｜帳篷', 48, 10, 'family_tent4801.jpg,family_tent4802.jpg', 10, 8300, '寬敞的家庭帳篷，適合各種活動', '1張雙人床 + 2張單人床', 5, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(431, 'RTC48B02', '標準型營位｜帳篷', 48, 11, 'standard_tent4801.jpg,standard_tent4802.jpg', 9, 8700, '標準帳篷，舒適又實惠的選擇', '1張雙人床', 3, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(432, 'RTC48B03', '豪華型營位｜帳篷', 48, 12, 'luxury_tent4801.jpg,luxury_tent4802.jpg', 8, 13000, '奢華帳篷，帶來無與倫比的露營享受', '1張大號雙人床', 2, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(433, 'RTC49C01', '家庭型營位｜露營車', 49, 4, 'family_rv4901.jpg,family_rv4902.jpg', 10, 9700, '適合全家出遊的舒適露營車', '1張雙人床 + 2張單人床', 6, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(434, 'RTC49C02', '標準型營位｜露營車', 49, 5, 'standard_rv4901.jpg,standard_rv4902.jpg', 8, 10100, '標準露營車，讓您享受舒適的戶外體驗', '1張雙人床 + 1張沙發床', 4, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(435, 'RTC49C03', '豪華型營位｜露營車', 49, 6, 'luxury_rv4901.jpg,luxury_rv4902.jpg', 6, 14800, '豪華露營車，為您帶來獨特的奢華體驗', '1張大號雙人床', 3, '附全餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(436, 'RTC49T01', '家庭型營位｜小木屋', 49, 7, 'family_cabin4901.jpg,family_cabin4902.jpg', 12, 8900, '溫馨小木屋，適合家庭共度時光', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(437, 'RTC49T02', '標準型營位｜小木屋', 49, 8, 'standard_cabin4901.jpg,standard_cabin4902.jpg', 10, 9400, '舒適的小木屋，提供您最佳的住宿體驗', '1張雙人床 + 1張單人床', 4, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(438, 'RTC49T03', '豪華型營位｜小木屋', 49, 9, 'luxury_cabin4901.jpg,luxury_cabin4902.jpg', 8, 16000, '奢華的小木屋，為您提供頂級享受', '1張大號雙人床', 3, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(439, 'RTC49B01', '家庭型營位｜帳篷', 49, 10, 'family_tent4901.jpg,family_tent4902.jpg', 10, 8400, '寬敞家庭帳篷，適合各種戶外活動', '1張雙人床 + 2張單人床', 5, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(440, 'RTC49B02', '標準型營位｜帳篷', 49, 11, 'standard_tent4901.jpg,standard_tent4902.jpg', 9, 8800, '舒適標準帳篷，為您提供便捷的住宿選擇', '1張雙人床', 3, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(441, 'RTC49B03', '豪華型營位｜帳篷', 49, 12, 'luxury_tent4901.jpg,luxury_tent4902.jpg', 8, 13500, '奢華帳篷，讓您享受高端露營體驗', '1張大號雙人床', 2, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(442, 'RTC50C01', '家庭型營位｜露營車', 50, 4, 'family_rv5001.jpg,family_rv5002.jpg', 10, 10200, '為家庭旅遊設計的舒適露營車', '1張雙人床 + 2張單人床', 6, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(443, 'RTC50C02', '標準型營位｜露營車', 50, 5, 'standard_rv5001.jpg,standard_rv5002.jpg', 8, 10800, '標準露營車，提供實用的居住空間', '1張雙人床 + 1張沙發床', 4, '附早餐和晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(444, 'RTC50C03', '豪華型營位｜露營車', 50, 6, 'luxury_rv5001.jpg,luxury_rv5002.jpg', 6, 15000, '豪華露營車，享受高端的露營體驗', '1張大號雙人床', 3, '附全餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(445, 'RTC50T01', '家庭型營位｜小木屋', 50, 7, 'family_cabin5001.jpg,family_cabin5002.jpg', 12, 9100, '適合全家的溫馨小木屋', '1張雙人床 + 2張單人床', 5, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(446, 'RTC50T02', '標準型營位｜小木屋', 50, 8, 'standard_cabin5001.jpg,standard_cabin5002.jpg', 10, 9600, '舒適小木屋，為您的假期提供完美的住宿', '1張雙人床 + 1張單人床', 4, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(447, 'RTC50T03', '豪華型營位｜小木屋', 50, 9, 'luxury_cabin5001.jpg,luxury_cabin5002.jpg', 8, 16500, '奢華小木屋，帶來獨特的住宿體驗', '1張大號雙人床', 3, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(448, 'RTC50B01', '家庭型營位｜帳篷', 50, 10, 'family_tent5001.jpg,family_tent5002.jpg', 10, 8500, '適合家庭使用的寬敞帳篷', '1張雙人床 + 2張單人床', 5, '附早餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(449, 'RTC50B02', '標準型營位｜帳篷', 50, 11, 'standard_tent5001.jpg,standard_tent5002.jpg', 9, 8800, '舒適標準帳篷，完美的戶外選擇', '1張雙人床', 3, '附早餐和燒烤晚餐', '2024-09-29 17:00:00', '2024-09-29 17:00:00'),
(450, 'RTC50B03', '豪華型營位｜帳篷', 50, 12, 'luxury_tent5001.jpg,luxury_tent5002.jpg', 8, 13000, '奢華帳篷，讓您享受戶外的同時擁有高端服務', '1張大號雙人床', 2, '附全餐和專屬服務', '2024-09-29 17:00:00', '2024-09-29 17:00:00');

CREATE TABLE `camp_fac` (
  `id` int NOT NULL AUTO_INCREMENT,
  `camp_id` int(11) NOT NULL,
  `fac_id` int(11) NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  primary key(id),
  FOREIGN KEY (camp_id) REFERENCES campsites(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO `camp_fac` (`id`, `camp_id`, `fac_id`,`created_at`, `updated_at`) VALUES
(1, 1, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(2, 1, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(3, 1, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(4, 1, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(5, 1, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(6, 2, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(7, 2, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(8, 2, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(9, 2, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(10, 2, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(11, 3, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(12, 3, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(13, 3, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(14, 3, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(15, 3, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(16, 4, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(17, 4, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(18, 4, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(19, 4, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(20, 4, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(21, 5, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(22, 5, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(23, 5, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(24, 5, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(25, 5, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(26, 6, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(27, 6, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(28, 6, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(29, 6, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(30, 6, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(31, 7, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(32, 7, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(33, 7, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(34, 7, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(35, 7, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(36, 8, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(37, 8, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(38, 8, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(39, 8, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(40, 8, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(41, 9, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(42, 9, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(43, 9, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(44, 9, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(45, 9, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(46, 10, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(47, 10, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(48, 10, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(49, 10, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(50, 10, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(51, 11, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(52, 11, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(53, 11, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(54, 11, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(55, 11, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(56, 12, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(57, 12, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(58, 12, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(59, 12, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(60, 12, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(61, 13, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(62, 13, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(63, 13, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(64, 13, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(65, 13, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(66, 14, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(67, 14, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(68, 14, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(69, 14, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(70, 14, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(71, 15, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(72, 15, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(73, 15, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(74, 15, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(75, 15, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(76, 16, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(77, 16, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(78, 16, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(79, 16, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(80, 16, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(81, 17, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(82, 17, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(83, 17, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(84, 17, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(85, 17, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(86, 18, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(87, 18, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(88, 18, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(89, 18, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(90, 18, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(91, 19, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(92, 19, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(93, 19, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(94, 19, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(95, 19, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(96, 20, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(97, 20, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(98, 20, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(99, 20, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(100, 20, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(101, 21, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(102, 21, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(103, 21, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(104, 21, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(105, 21, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(106, 22, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(107, 22, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(108, 22, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(109, 22, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(110, 22, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(111, 23, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(112, 23, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(113, 23, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(114, 23, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(115, 23, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(116, 24, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(117, 24, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(118, 24, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(119, 24, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(120, 24, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(121, 25, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(122, 25, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(123, 25, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(124, 25, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(125, 25, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(126, 26, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(127, 26, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(128, 26, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(129, 26, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(130, 26, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(131, 27, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(132, 27, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(133, 27, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(134, 27, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(135, 27, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(136, 28, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(137, 28, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(138, 28, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(139, 28, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(140, 28, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(141, 29, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(142, 29, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(143, 29, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(144, 29, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(145, 29, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(146, 30, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(147, 30, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(148, 30, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(149, 30, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(150, 30, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(151, 31, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(152, 31, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(153, 31, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(154, 31, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(155, 31, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(156, 32, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(157, 32, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(158, 32, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(159, 32, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(160, 32, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(161, 33, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(162, 33, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(163, 33, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(164, 33, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(165, 33, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(166, 34, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(167, 34, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(168, 34, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(169, 34, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(170, 34, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(171, 35, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(172, 35, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(173, 35, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(174, 35, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(175, 35, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(176, 36, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(177, 36, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(178, 36, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(179, 36, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(180, 36, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(181, 37, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(182, 37, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(183, 37, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(184, 37, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(185, 37, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(186, 38, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(187, 38, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(188, 38, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(189, 38, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(190, 38, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(191, 39, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(192, 39, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(193, 39, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(194, 39, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(195, 39, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(196, 40, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(197, 40, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(198, 40, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(199, 40, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(200, 40, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(201, 41, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(202, 41, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(203, 41, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(204, 41, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(205, 41, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(206, 42, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(207, 42, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(208, 42, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(209, 42, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(210, 42, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(211, 43, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(212, 43, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(213, 43, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(214, 43, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(215, 43, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(216, 44, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(217, 44, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(218, 44, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(219, 44, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(220, 44, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(221, 45, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(222, 45, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(223, 45, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(224, 45, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(225, 45, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(226, 46, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(227, 46, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(228, 46, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(229, 46, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(230, 46, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(231, 47, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(232, 47, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(233, 47, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(234, 47, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(235, 47, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(236, 48, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(237, 48, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(238, 48, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(239, 48, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(240, 48, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(241, 49, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(242, 49, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(243, 49, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(244, 49, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(245, 49, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(246, 50, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(247, 50, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(248, 50, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(249, 50, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(250, 50, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23');


CREATE TABLE `camp_feat` (
  `id` int(11) NOT NULL,
  `camp_id`  int(11) NOT NULL,
  `feat_id` int(11) NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  primary key(id),
  FOREIGN KEY (camp_id) REFERENCES campsites(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO `camp_feat` (`id`, `camp_id`, `feat_id`, `created_at`, `updated_at`) VALUES
(1, 1, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(2, 1, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(3, 1, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(4, 1, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(5, 2, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(6, 2, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(7, 2, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(8, 2, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(9, 2, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(10, 3, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(11, 3, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(12, 3, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(13, 4, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(14, 4, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(15, 4, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(16, 5, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(17, 5, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(18, 5, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(19, 5, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(20, 6, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(21, 6, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(22, 7, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(23, 7, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(24, 8, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(25, 8, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(26, 9, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(27, 9, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(28, 10, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(29, 10, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(30, 11, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(31, 11, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(32, 12, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(33, 12, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(34, 13, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(35, 14, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(36, 14, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(37, 15, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(38, 15, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(39, 16, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(40, 16, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(41, 17, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(42, 17, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(43, 18, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(44, 18, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(45, 19, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(46, 19, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(47, 20, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(48, 20, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(49, 21, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(50, 21, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(51, 22, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(52, 22, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(53, 23, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(54, 23, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(55, 24, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(56, 24, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(57, 25, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(58, 25, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(59, 26, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(60, 26, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(61, 27, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(62, 27, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(63, 28, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(64, 28, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(65, 29, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(66, 29, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(67, 30, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(68, 30, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(69, 31, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(70, 31, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(71, 32, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(72, 32, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(73, 33, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(74, 34, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(75, 34, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(76, 35, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(77, 35, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(78, 36, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(79, 36, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(80, 37, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(81, 37, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(82, 38, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(83, 38, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(84, 39, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(85, 40, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(86, 40, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(87, 41, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(88, 41, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(89, 42, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(90, 42, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(91, 43, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(92, 43, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(93, 44, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(94, 44, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(95, 45, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(96, 45, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(97, 46, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(98, 46, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(99, 47, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(100, 47, 2, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(101, 48, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(102, 48, 6, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(103, 49, 3, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(104, 49, 4, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(105, 50, 5, '2024-09-02 10:44:23', '2024-09-02 10:44:23'),
(106, 50, 1, '2024-09-02 10:44:23', '2024-09-02 10:44:23');

-- ----------------------------
-- 營位手風琴
-- ----------------------------
-- 主表 categories：存儲每個主要類別的ID和標題
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO categories (title) VALUES
('服務與設施'),
('入住資訊'),
('退訂政策');

-- 子表 content_sections：存儲每個主要類別中的細分標題及其內容
CREATE TABLE content_sections (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT,  -- 關聯到 categories 表
    number INT,
    title VARCHAR(255),
    FOREIGN KEY (category_id) REFERENCES categories(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
-- 服務與設施內容
INSERT INTO content_sections (category_id, number, title) VALUES
(1, 1, '露營區域'),
(1, 2, '衛浴設施'),
(1, 3, '公共設施'),
(1, 4, '飲食選擇'),
(1, 5, '活動安排'),
(1, 6, '安全設施'),
(1, 7, '其他服務');

-- 入住資訊內容
INSERT INTO content_sections (category_id, number, title) VALUES
(2, 1, '入住時間'),
(2, 2, '退房時間'),
(2, 3, '入住流程'),
(2, 4, '設備租賃'),
(2, 5, '寵物政策'),
(2, 6, '特別需求');

-- 退訂政策內容
INSERT INTO content_sections (category_id, number, title) VALUES
(3, 1, '一般退訂政策'),
(3, 2, '特殊情況'),
(3, 3, '更改日期'),
(3, 4, '退款流程');

-- 次子表 sub_contents：存儲每個細分標題的具體描述
CREATE TABLE sub_contents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    section_id INT,  -- 關聯到 content_sections 表
    description TEXT,
    FOREIGN KEY (section_id) REFERENCES content_sections(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
-- 插入 服務與設施 的描述
INSERT INTO sub_contents (section_id, description) VALUES
(1, '提供多種類型的露營場地，如草地營位、木製平台營位、車宿營位等，適合不同需求的露營者。'),
(1, '部分營地設有電力供應和水源點，方便露營者使用電器和獲取飲用水。'),
(2, '現代化的衛浴設施，包括淋浴間和廁所，通常提供熱水和基本的衛浴用品，保持清潔舒適。'),
(3, '露營區內設有公共烤肉區、野餐桌椅、遊樂設施（如盪鞦韆、滑梯）等，為家庭或團體活動提供便利。'),
(3, '供應室內外遊戲空間或休息區，如棋類遊戲區、閱讀角落或是簡單的運動場地。'),
(4, '營區設有小型餐廳或便利商店，供應簡餐、飲品或是露營必需品。'),
(4, '提供當地食材的餐飲服務，如生鮮蔬果、肉類，讓露營者能夠自行烹飪。'),
(5, '舉辦各種戶外活動，如導覽健行、星空觀賞、手作工藝等，增添露營樂趣。'),
(5, '提供租賃服務，如自行車、皮划艇、露營設備等，方便遊客體驗更多戶外活動。'),
(6, '配備緊急醫療箱、防火設施等，並設有管理員值班，確保露營者的安全。'),
(7, 'Wi-Fi 覆蓋（部分區域）、充電站，以及部分營地可能提供寵物友好設施，方便帶寵物的家庭。');

-- 插入 入住資訊 的描述
INSERT INTO sub_contents (section_id, description) VALUES
(8, '標準入住時間為下午2:00以後。'),
(8, '若需要提前入住，請提前聯絡營地管理處確認是否有空位。'),
(9, '標準退房時間為上午11:00之前。'),
(9, '延遲退房可能需額外收費，請提前與營地管理處協商。'),
(10, '抵達營地後，請前往管理處辦理入住手續，並領取營地相關資料。'),
(10, '營地工作人員將指引您至指定的營位，並介紹設施的使用方法。'),
(11, '營地提供帳篷、睡袋、烤肉設備等租賃服務，需提前預訂。'),
(11, '所有租賃設備需在退房時歸還並檢查。'),
(12, '營地歡迎寵物同行，但需保持牽繩，並請攜帶寵物清潔用品，保持營地環境整潔。'),
(13, '若有特別需求（如殘障人士設施、特定飲食需求等），請在預訂時告知營地，以便提供適當的服務。');

-- 插入 退訂政策 的描述
INSERT INTO sub_contents (section_id, description) VALUES
(14, '於入住日期前14天取消，將全額退還訂金。'),
(14, '於入住日期前7至13天取消，將扣除總金額的30%作為手續費，其餘部分退還。'),
(14, '於入住日期前3至6天取消，將扣除總金額的50%作為手續費，其餘部分退還。'),
(14, '於入住日期前2天內取消，或無故未入住，將不予退還任何費用。'),
(15, '若因天災（如颱風、地震等）或其他不可抗力因素導致無法入住，營地將提供全額退款或延期一次，客人可選擇適合的日期再次入住。'),
(16, '若需更改入住日期，請至少於原訂入住日期前7天提出，經營地確認後可更改一次，不收取手續費。'),
(17, '取消訂單後，退款將在7個工作日內退還至原付款方式。若有任何疑問，請聯絡營地客服。');

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
(1, '袁冠謹', 'h5n23A63', 'sinatra9546@gmail.com', '彰化縣溪湖鎮二溪路2段51號之10', '0917070276', '1964-08-01', 'male', 'none'),
(2, '林得辛', 'th6mr772', 'teresa4655@hotmail.com', '臺中市太平區東村三街13號', '0939417503', '2016-01-06', 'female', 'none'),
(3, '黃亮悟', 'bC4GzH72', 'arnold6355@gmail.com', '臺中市大甲區經國路62號之18', '0924185028', '2013-03-30', 'female', 'none'),
(4, '傅昌道', '2kc2z6Qc', 'marissa4394@yahoo.com', '苗栗縣造橋鄉新庄仔80號10樓', '0937421669', '1965-02-16', 'female', 'none'),
(5, '劉年騏', 'ugSNRQCW', 'nancy3562@gmail.com', '屏東縣東港鎮新勝街86號之5', '0986160269', '2008-01-29', 'male', 'none'),
(6, '劉宥翊', 'FnmV665W', 'cullen7304@yahoo.com', '南投縣竹山鎮中央巷28號7樓之10', '0933996573', '1983-05-22', 'female', 'none'),
(7, '郭恆晤', 'uK287p3p', 'eugene8573@hotmail.com', '桃園市楊梅區草湳坡下70號', '0960984805', '1988-12-08', 'male', 'none'),
(8, '陳洋澤', 'm788L2VK', 'gutierrez933@gmail.com', '屏東縣長治鄉文學街3號之3', '0954439815', '2020-09-08', 'male', 'none'),
(9, '林瀾芬', 'UprL86my', 'crouch3821@yahoo.com', '宜蘭縣五結鄉和平路和平巷1號', '0952681447', '1969-01-29', 'female', 'none'),
(10, '劉庭莉', '4T7mf9c8', 'turner8074@outlook.com', '花蓮縣吉安鄉東海一街99號', '0913007060', '1985-07-10', 'male', 'none');

-- 訂單概要資訊
CREATE TABLE my_booking (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `order_id` INT NOT NULL, -- 訂單概要id
    `sn` varchar(255) NOT NULL, -- BO20240902A01
    `user_id` INT NOT NULL,
    `status` ENUM('pending', 'processing', 'completed', 'canceled') NOT NULL, -- 處理中?完成?取消?
    `total_amount` DECIMAL(10, 2) NOT NULL, -- 總金額
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user_data(user_id) ON DELETE CASCADE
);

-- 訂單詳情
CREATE TABLE b_order_items (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT DEFAULT  NULL,
    `r_type_id` INT NOT NULL, -- 房型方案id
    `username` varchar(255) NOT NULL, -- 訂購人姓名
    `phone` varchar(255) NOT NULL, -- 訂購人電話
    `bookEmail` varchar(255) NOT NULL, -- 訂購人郵件
    `quantity` INT NOT NULL, -- 預訂房間數量
    `price` DECIMAL(10, 2) NOT NULL, -- 單價
    `total_price` INT NOT NULL , -- 總價=單價*數量
	`adult` INT NOT NULL,  -- 大人人數
    `children` INT default NULL, -- 小孩人數
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (r_type_id) REFERENCES booking_type(id) ON DELETE CASCADE,
    FOREIGN KEY (`user_id`) REFERENCES `user_data`(`user_id`) ON DELETE CASCADE
);

-- ----------------------------
-- 活動
-- ----------------------------

-- ----------------------------
-- 活動詳情 Event_holding_list 
-- ----------------------------
DROP TABLE IF EXISTS `event_holding_list`;

CREATE TABLE `event_holding_list` (
  `event_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT DEFAULT NULL,
  `organizer_nick` VARCHAR(255) NOT NULL,
  `event_pic` VARCHAR(255) DEFAULT NULL,
  `event_description` VARCHAR(255) DEFAULT NULL,
  `event_title` VARCHAR(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `start_date` DATE DEFAULT NULL,
  `end_date` DATE DEFAULT NULL,
  `camp_id` INT NOT NULL,
  `camp_address` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `selected_book_type` INT NOT NULL,
  `order_quantity` INT NOT NULL,
  `event_people` INT NOT NULL,
  `order_amount` INT NOT NULL,
  `other_fees` INT NOT NULL,
  `total_cost` INT NOT NULL,
  `cost_per_person` INT NOT NULL,
  `event_notes` VARCHAR(255) DEFAULT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deadline` DATETIME NOT NULL DEFAULT (DATE_ADD(CURRENT_TIMESTAMP, INTERVAL 14 DAY)),
  
  PRIMARY KEY (`event_id`),
  CONSTRAINT `FK_camp_id` FOREIGN KEY (`camp_id`) REFERENCES `campsites`(`id`),
  CONSTRAINT `FK_selected_book_type` FOREIGN KEY (`selected_book_type`) REFERENCES `booking_type`(`id`),
  CONSTRAINT `FK_user_id` FOREIGN KEY (`user_id`) REFERENCES `user_data`(`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 設定 AUTO_INCREMENT 起始值
ALTER TABLE `event_holding_list` AUTO_INCREMENT = 1728395;

-- 匯入假資料
INSERT INTO `event_holding_list` (`event_id`, `user_id`, `organizer_nick`, `event_pic`, `event_description`, `event_title`, `start_date`,`end_date`,`camp_id`,`camp_address`,`selected_book_type`,`order_quantity`,`event_people`,`order_amount`,`other_fees`,`total_cost`,`cost_per_person`,`event_notes`,`created_at`,`deadline`) VALUES
('1728395', '1', '小明', 'https://i.postimg.cc/bv0YQsDR/pexels-photo-799445.jpg', '一起來享受大自然的美好！我們將在清幽的山林間舉辦一場輕鬆愉快的露營活動，不僅有營火晚會、團康，還能結交新朋友。無論你是露營新手還是老手，都歡迎加入我們的露營行列，共同體驗星空下的美好夜晚！', '揪伙來尬露', '2024-11-10', '2024-11-12', '1','台灣花蓮縣秀林鄉太魯閣村200號', '1', '1', '4', '1200', '1200','2400', '600', '若有特殊飲食需求或過敏，請提前告知。', '2024-10-08 15:00:40', '2024-10-19 15:00:40'),
('1728396', '2', '小華', 'https://i.postimg.cc/KvT2n6Bc/1009th.jpg', '來場溫馨的家庭露營吧！小朋友將有專屬的戶外活動，家長可以在一旁放鬆心情。一起享受大自然的寧靜與美好，還有機會看到滿天星斗！', '家庭露營樂', '2024-11-15', '2024-11-17', '2', '台灣南投縣魚池鄉日月村3號', '2', '2', '5', '1500', '1500', '3000', '600', '提供營地餐點，如有特殊飲食需求請事先告知。', '2024-10-08 15:00:00', '2024-10-19 15:00:00'),
('1728397', '3', '小美', 'https://i.postimg.cc/PxxGPxmJ/camping-6882479-1280.jpg', '不僅是露營，更是一場心靈的淨化之旅！我們將在山林中進行瑜伽冥想、森林漫步，放鬆身心，與自然融為一體。', '心靈淨化之旅', '2024-12-05', '2024-12-07', '3', '台灣宜蘭縣大同鄉牛鬥村8號', '3', '1', '8', '2000', '1000', '4000', '500', '請自備瑜伽墊與舒適的運動服裝。', '2024-10-08 16:00:00', '2024-10-19 16:00:00'),

('1728398', '4', '小豪', 'https://i.postimg.cc/YSy7NY2Y/camping-7947056-1280.jpg', '適合露營新手的入門體驗！提供基本裝備與教學，讓你在輕鬆愉快的氛圍中學會搭帳篷、生火及簡單的野外求生技巧。', '新手露營體驗', '2024-11-20', '2024-11-21', '4', '台灣台中市和平區梨山村100號', '1', '1', '6', '1000', '500', '2000', '333', '新手訓練課程，請攜帶個人基本生活用品。', '2024-10-08 17:00:00', '2024-11-10 17:00:00'),
('1728399', '5', '小琳', 'https://i.postimg.cc/5NmZqLny/DALL-E-2024-08-20-23-35-05-A-cute-chibi-style-illustration-of-a-camping-theme-The-image-should-f.webp', '我們將進行一場輕量背包健行與露營之旅，適合體能較好的參加者。沿途將欣賞壯麗的山景與溪谷美景，一同挑戰自我、探索自然。', '健行露營挑戰', '2024-12-15', '2024-12-17', '5', '台灣台東縣卑南鄉鹿野村50號', '4', '2', '10', '3000', '2000', '5000', '500', '需有基本健行經驗，並能背負15公斤裝備行進4小時。', '2024-10-08 18:00:00', '2024-12-01 18:00:00'),
('1728400', '6', '小宇', 'https://i.postimg.cc/J4TpzqpN/DALL-E-2024-08-20-23-37-48-A-cute-chibi-style-illustration-of-a-camping-theme-similar-to-the-pro.webp', '冬季露營歡迎你！我們將一起進行寒冬露營挑戰，搭建雪地帳篷、學習野外取暖及生火技巧，挑戰嚴寒，體驗獨特的冬季露營。', '冬季露營挑戰', '2024-12-22', '2024-12-24', '6', '台灣南投縣仁愛鄉清境村10號', '5', '1', '12', '2500', '1500', '5000', '416', '請自備防寒裝備，活動期間將有專業教練全程陪同。', '2024-10-08 19:00:00', '2024-12-10 19:00:00'),
('1728401', '7', '阿凱', 'https://i.postimg.cc/jqcXMc0p/fire-434157-1280.jpg', '來一場城市旁的露營吧！我們將在郊區舉辦一場輕鬆的露營活動，無需遠行即可享受戶外時光。適合忙碌的都市人短暫逃離，放鬆心情。', '都市人放鬆露營', '2024-11-25', '2024-11-26', '7', '台灣新北市平溪區十分村50號', '1', '1', '15', '800', '400', '1600', '106', '活動含一餐燒烤與戶外電影播放。', '2024-10-08 20:00:00', '2024-11-15 20:00:00'),
('1728402', '8', '小芸', 'https://i.postimg.cc/d3fZzL9y/istockphoto-1148431349-1024x1024.jpg', '這是一場專為登山健行愛好者準備的高山露營行程。我們將挑戰合歡山脈，於山頂露營並迎接日出。適合有登山經驗者參加。', '合歡山高山露營', '2024-11-28', '2024-11-30', '8', '台灣南投縣仁愛鄉合歡村1號', '4', '3', '10', '3500', '1500', '5000', '500', '需有基本登山裝備與經驗，登頂過程將有專業嚮導陪同。', '2024-10-08 21:00:00', '2024-11-18 21:00:00'),
('1728403', '9', '阿虎', 'https://i.postimg.cc/QNkwgcdP/pexels-photo-2582818.jpg', '來場星空下的音樂露營吧！專業樂隊將在露營場地進行戶外表演，讓你在星空與音樂的陪伴下度過一個美好的夜晚。', '星空音樂露營', '2024-12-01', '2024-12-02', '9', '台灣嘉義縣阿里山鄉中正村5號', '2', '1', '20', '2500', '1000', '3500', '175', '音樂演出期間請保持安靜，勿打擾其他參加者。', '2024-10-08 22:00:00', '2024-11-20 22:00:00'),
('1728404', '10', '阿元', 'https://i.postimg.cc/268hmVy5/camp-2650359-1280.jpg', '露營結合DIY手作活動，適合親子共遊！一起動手製作屬於自己的露營燈籠，並在營火旁享受親手做的小點心，共度溫馨時光。', '親子手作露營', '2024-12-08', '2024-12-09', '10', '台灣台南市白河區關子嶺村30號', '3', '2', '10', '1800', '800', '2600', '260', 'DIY材料費用已含在活動總價中，請勿自行攜帶額外工具。', '2024-10-08 23:00:00', '2024-11-25 23:00:00'),
('1728405', '11', '小安', 'https://i.postimg.cc/xTtCDtHL/tent-4558240-1280.jpg', '適合夜貓子的露營活動！我們將進行一場夜間徒步探險，探訪夜間活躍的野生動物，並在清晨迎接曙光的到來。', '夜貓子露營探險', '2024-12-12', '2024-12-13', '11', '台灣高雄市六龜區寶來村100號', '5', '1', '12', '2000', '1000', '3000', '250', '請穿著適合夜間行走的輕便裝備，並攜帶手電筒與防蚊用品。', '2024-10-08 23:30:00', '2024-12-05 23:30:00'),
('1728406', '12', '小宇', 'https://i.postimg.cc/VNyP3C7j/tents-5983161-1280.jpg', '享受寧靜的湖畔露營時光，夜晚將有專業導師帶領觀星活動，適合喜愛天文與靜謐環境的露營愛好者。', '湖畔星空露營', '2024-12-20', '2024-12-21', '12', '台灣南投縣魚池鄉日月村30號', '1', '2', '8', '2200', '800', '3000', '375', '請自備望遠鏡與天文圖冊，現場將提供部分設備供使用。', '2024-10-09 10:00:00', '2024-12-10 10:00:00'),
('1728407', '13', '大山', 'https://i.postimg.cc/wvGVGh2z/th-000.jpg', '體驗森林療癒與瑜伽放鬆活動，我們將在濃密的森林中靜靜享受大自然的氣息，配合專業瑜伽老師的引導，讓身心得到徹底的放鬆。', '森林瑜伽療癒營', '2024-12-25', '2024-12-27', '13', '台灣苗栗縣南庄鄉蓬萊村100號', '2', '3', '15', '3000', '1000', '4000', '267', '建議參加者穿著舒適服裝並攜帶瑜伽墊。', '2024-10-09 11:00:00', '2024-12-15 11:00:00'),
('1728408', '14', '阿潔', 'https://i.postimg.cc/MGh00WpZ/th-1.jpg', '這是一場結合烹飪課程的露營活動，我們將學習如何在戶外用簡單的工具製作出美味的餐點，適合喜愛料理與露營的參加者。', '戶外烹飪露營', '2024-12-29', '2024-12-30', '14', '台灣台東縣鹿野鄉高台村75號', '3', '2', '10', '2500', '1200', '3700', '370', '每位參加者將獲得一份戶外料理配方書。', '2024-10-09 12:00:00', '2024-12-20 12:00:00'),
('1728409', '15', '小玉', 'https://i.postimg.cc/bJhDNdvn/th-2.jpg', '親近動物的露營體驗，我們將前往鹿林園，近距離觀察與接觸鹿群，並在專業講師的引導下瞭解更多野生動物保育知識。', '鹿林園生態露營', '2024-12-18', '2024-12-19', '15', '台灣彰化縣鹿港鎮鹿林村3號', '4', '1', '12', '3000', '1500', '4500', '375', '請保持環境安靜，不得隨意餵食或干擾動物。', '2024-10-09 13:00:00', '2024-12-12 13:00:00'),
('1728410', '16', '阿偉', 'https://i.postimg.cc/K8tmcf39/th-3.jpg', '前往小溪畔的營地，我們將體驗溪釣與自然步道健行，適合熱愛釣魚與輕度健行活動的朋友參加。', '小溪釣魚露營', '2025-01-05', '2025-01-06', '16', '台灣花蓮縣豐濱鄉溪畔村20號', '5', '1', '15', '2800', '1000', '3800', '253', '現場提供基本釣魚用具，建議自備健行鞋與防曬用品。', '2024-10-09 14:00:00', '2024-12-30 14:00:00'),
('1728411', '17', '阿凱', 'https://i.postimg.cc/HW5m93BT/th-4.jpg', '挑戰自我的高山攀登露營活動，我們將前往台灣知名的玉山山脈，進行為期兩天的高難度攀登與露營，適合擁有戶外經驗的冒險者參加。', '玉山攀登挑戰營', '2025-01-10', '2025-01-12', '17', '台灣南投縣信義鄉玉山村56號', '6', '2', '12', '3500', '1500', '5000', '417', '建議攜帶個人攀登裝備與防寒服裝。', '2024-10-09 15:00:00', '2024-12-31 15:00:00'),
('1728412', '18', '小美', 'https://i.postimg.cc/8PRr9RPS/th-6.jpg', '一場親子露營活動，我們將帶領家長與孩子在安全舒適的環境中進行各種團體活動與互動遊戲，促進家庭成員間的感情與合作。', '親子互動露營', '2025-01-15', '2025-01-16', '18', '台灣宜蘭縣頭城鎮宜蘭路22號', '7', '4', '20', '4000', '2000', '6000', '300', '適合6歲以上兒童參加，敬請攜帶兒童日常用品與輕便衣物。', '2024-10-09 16:00:00', '2025-01-05 16:00:00'),
('1728413', '19', '阿志', 'https://i.postimg.cc/SQL5KPgY/th-5.jpg', '結合攝影教學的露營活動，我們將在美麗的山林中學習如何捕捉大自然的美景，適合攝影初學者與愛好者參加。', '大自然攝影露營', '2025-01-20', '2025-01-21', '19', '台灣南投縣仁愛鄉山林村15號', '8', '1', '10', '3000', '1200', '4200', '420', '建議攜帶個人攝影器材與三腳架，現場提供簡單指導課程。', '2024-10-09 17:00:00', '2025-01-10 17:00:00'),
('1728414', '20', '阿芳', 'https://i.postimg.cc/d3HtcVXG/th-7.jpg', '海灘音樂露營派對，我們將在美麗的沙灘上搭建露營區，晚上還會舉辦音樂派對與煙火秀，適合喜愛音樂與戶外活動的年輕朋友參加。', '沙灘音樂露營', '2025-01-25', '2025-01-26', '20', '台灣墾丁南灣路30號', '9', '2', '50', '5000', '3000', '8000', '160', '請自備輕便涼鞋與沙灘服飾，現場提供飲品與輕食。', '2024-10-09 18:00:00', '2025-01-20 18:00:00'),
('1728415', '21', '阿傑', 'https://i.postimg.cc/Z5ZZs30X/th-8.jpg', '學習如何在野外生存的技能課程，我們將進行搭建帳篷、尋找食物與水源等各種野外生存技巧訓練，適合熱愛冒險的參加者。', '野外生存訓練營', '2025-02-01', '2025-02-02', '21', '台灣台中市大肚山路45號', '10', '3', '15', '3500', '1800', '5300', '353', '每位參加者將獲得一本野外生存手冊與基本工具組。', '2024-10-09 19:00:00', '2025-01-25 19:00:00'),
('1728416', '22', '小華', 'https://i.postimg.cc/WpMHWyrb/th-9.jpg', '來場減壓的靜心露營，透過瑜伽、冥想與大自然融為一體，幫助參加者放鬆身心、釋放壓力，是忙碌工作者與學生的最佳選擇。', '森林靜心瑜伽營', '2025-02-10', '2025-02-12', '22', '台灣新竹縣尖石鄉尖石村50號', '11', '2', '15', '2500', '1000', '3500', '233', '現場提供瑜伽墊與簡單晚餐，請自備個人水瓶與輕便服飾。', '2024-10-10 10:00:00', '2025-02-05 10:00:00'),
('1728417', '23', '大雄', 'https://i.postimg.cc/TYNqCjk3/th-10.jpg', '挑戰自我體能極限的百岳登山露營活動，適合體能佳且有登山經驗的參加者，一起征服台灣百岳之一的南湖大山，體驗高山美景。', '南湖大山百岳挑戰', '2025-03-01', '2025-03-04', '23', '台灣宜蘭縣南澳鄉南湖村90號', '12', '3', '10', '5000', '2000', '7000', '700', '請攜帶個人專業登山裝備與足夠的補給品。', '2024-10-10 11:00:00', '2025-02-25 11:00:00'),
('1728418', '24', '阿成', 'https://i.postimg.cc/15K5QJxy/th-7.jpg', '結合溪降與露營的刺激活動，挑戰台灣東部的山澗溪流，在專業教練帶領下體驗自然水域的壯麗景色與刺激樂趣，適合愛好冒險的參加者。', '溪降冒險露營', '2025-03-10', '2025-03-11', '24', '台灣花蓮縣卓溪鄉溪降村38號', '13', '2', '8', '4500', '1500', '6000', '750', '建議攜帶防水袋與更換衣物，現場提供安全裝備。', '2024-10-10 12:00:00', '2025-03-05 12:00:00'),
('1728419', '25', '阿健', 'https://i.postimg.cc/GpLDRHg5/th.jpg', '湖邊釣魚與露營的休閒活動，適合想放鬆心情的參加者，白天可釣魚享受湖畔風光，晚上在星空下露營，並分享釣魚心得。', '湖畔釣魚露營', '2025-03-15', '2025-03-16', '25', '台灣南投縣魚池鄉魚池村68號', '14', '1', '6', '1800', '800', '2600', '433', '提供釣魚裝備租借服務，釣獲之魚可現場烤製。', '2024-10-10 13:00:00', '2025-03-10 13:00:00'),
('1728420', '26', '阿莉', 'https://i.postimg.cc/13J07ky6/th000.jpg', '探索夜空奧秘的星空觀測露營，專業導師將介紹各種星座與天體知識，並透過高倍望遠鏡觀測夜空的奧秘。', '星空觀測露營', '2025-03-20', '2025-03-21', '26', '台灣台東縣池上鄉觀星村95號', '15', '1', '20', '3500', '1200', '4700', '235', '請自備防蚊液與輕便毯，建議攜帶相機與腳架以便拍攝星空美景。', '2024-10-10 14:00:00', '2025-03-15 14:00:00'),
('1728421', '27', '小剛', 'https://i.postimg.cc/k4FgfmmP/th101.jpg', '在碧藍湖水上進行獨木舟露營體驗，白天可划獨木舟遊湖，夜晚在湖畔露營享受靜謐的自然氛圍。適合初學者與有經驗者參加，教練將全程陪同指導。', '湖上獨木舟露營', '2025-04-01', '2025-04-02', '27', '台灣苗栗縣南庄鄉獨木舟村20號', '16', '1', '12', '3200', '1000', '4200', '350', '建議穿著防曬服裝並攜帶防水相機，活動結束後可參加導覽健行。', '2024-10-10 15:00:00', '2025-03-25 15:00:00'),
('1728422', '28', '小玲', 'https://i.postimg.cc/N0W5MDgL/1010101.jpg', '結合自行車健行與露營的戶外活動，環繞台灣中部的絕美山景騎行，沿途設置露營點休息，享受清晨與黃昏的山景。適合體能較佳的參加者。', '山區自行車露營', '2025-04-10', '2025-04-12', '28', '台灣南投縣信義鄉自行車村30號', '17', '1', '20', '4000', '1500', '5500', '275', '建議參加者準備個人自行車裝備與防護裝備。', '2024-10-10 16:00:00', '2025-04-05 16:00:00'),
('1728423', '29', '阿國', 'https://i.postimg.cc/C5v0ZMjJ/th-1.jpg', '體驗台灣東北角的高山溫泉露營，活動包括高山健行與溫泉泡湯，在自然美景中享受舒適的溫泉放鬆，是喜愛溫泉與山景的參加者最佳選擇。', '高山溫泉露營', '2025-04-20', '2025-04-22', '29', '台灣宜蘭縣南澳鄉溫泉村15號', '18', '1', '10', '3800', '1200', '5000', '500', '請自備泳衣與毛巾，現場提供基本健行裝備租借服務。', '2024-10-10 17:00:00', '2025-04-15 17:00:00'),
('1728424', '30', '阿豪', 'https://i.postimg.cc/L6r7xZ6L/th-2.jpg', '夏日海灘露營趴來了！在沙灘上享受日光浴、衝浪與沙灘排球，夜晚點起營火舉辦派對。歡迎三五好友一起來享受夏日的熱情！', '夏日海灘露營派對', '2025-05-10', '2025-05-11', '30', '台灣屏東縣墾丁鄉海灘村100號', '19', '2', '30', '3000', '1000', '4000', '133', '建議攜帶泳裝與沙灘巾，現場提供露營帳篷與基本設備租借。', '2024-10-10 18:00:00', '2025-05-05 18:00:00'),
('1728425', '31', '小潔', 'https://i.postimg.cc/R0CjtxZD/th.jpg', '一起來探索秘境山林的生態露營，專業生態導覽員將帶領大家認識山林中的動植物，並了解森林生態系的奧秘，適合親子與對自然生態有興趣的朋友。', '秘境生態露營', '2025-05-15', '2025-05-16', '31', '台灣南投縣仁愛鄉秘境村88號', '20', '1', '18', '2800', '1000', '3800', '211', '建議攜帶雙筒望遠鏡與相機記錄動植物生態，請勿餵食野生動物。', '2024-10-10 19:00:00', '2025-05-10 19:00:00');

-- ----------------------------
-- 活動參與 event_participants
-- ----------------------------
DROP TABLE IF EXISTS `event_participants`;
CREATE TABLE `event_participants` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `event_id` INT NOT NULL,
  `is_organizer` BOOLEAN DEFAULT FALSE, -- 是否為該活動的主辦人
  `join_date`DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, -- 加入活動的日期
  FOREIGN KEY (`user_id`) REFERENCES `user_data`(`user_id`),
  FOREIGN KEY (`event_id`) REFERENCES `event_holding_list`(`event_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 匯入假資料
INSERT INTO `event_participants` (`id`, `user_id`, `event_id`, `is_organizer`, `join_date`) VALUES
-- 主辦人加入活動 (is_organizer = TRUE)
(1, 1, 1728395, TRUE, '2024-10-08 15:00:40'),
(2, 2, 1728396, TRUE, '2024-10-08 15:00:00'),
(3, 3, 1728397, TRUE, '2024-10-08 16:00:00'),
(4, 4, 1728398, TRUE, '2024-10-08 17:00:00'),
(5, 5, 1728399, TRUE, '2024-10-08 18:00:00'),
(6, 6, 1728400, TRUE, '2024-10-08 19:00:00'),
(7, 7, 1728401, TRUE, '2024-10-08 20:00:00'),
(8, 8, 1728402, TRUE, '2024-10-08 21:00:00'),
(9, 9, 1728403, TRUE, '2024-10-08 22:00:00'),
(10, 10, 1728404, TRUE, '2024-10-08 23:00:00'),
(11, 11, 1728405, TRUE, '2024-10-08 23:00:00'),
(12, 12, 1728406, TRUE, '2024-10-08 23:00:00'),
(13, 13, 1728407, TRUE, '2024-10-08 23:00:00'),
(14, 14, 1728408, TRUE, '2024-10-08 23:00:00'),
(15, 15, 1728409, TRUE, '2024-10-08 23:00:00'),
(16, 16, 1728410, TRUE, '2024-10-08 23:00:00'),
(17, 17, 1728411, TRUE, '2024-10-08 23:00:00'),
(18, 18, 1728412, TRUE, '2024-10-08 23:00:00'),
(19, 19, 1728413, TRUE, '2024-10-08 23:00:00'),
(20, 20, 1728414, TRUE, '2024-10-08 23:00:00'),
(21, 21, 1728415, TRUE, '2024-10-08 23:00:00'),
(22, 22, 1728416, TRUE, '2024-10-08 23:00:00'),
(23, 23, 1728417, TRUE, '2024-10-08 23:00:00'),
(24, 24, 1728418, TRUE, '2024-10-08 23:00:00'),
(25, 25, 1728419, TRUE, '2024-10-08 23:00:00'),
(26, 26, 1728420, TRUE, '2024-10-08 23:00:00'),
(27, 27, 1728421, TRUE, '2024-10-08 23:00:00'),
(28, 28, 1728422, TRUE, '2024-10-08 23:00:00'),
(29, 29, 1728423, TRUE, '2024-10-08 23:00:00'),
(30, 30, 1728424, TRUE, '2024-10-08 23:00:00'),
(31, 31, 1728425, TRUE, '2024-10-08 23:00:00'),


-- 其他參加者加入活動 (隨機日期，is_organizer = FALSE)
(32, 11, 1728395, FALSE, '2024-10-09 10:00:00'),
(33, 12, 1728396, FALSE, '2024-10-09 12:30:00'),
(34, 13, 1728397, FALSE, '2024-10-10 08:00:00'),
(35, 14, 1728398, FALSE, '2024-10-10 09:15:00'),
(36, 15, 1728399, FALSE, '2024-10-10 10:45:00'),
(37, 16, 1728400, FALSE, '2024-10-10 11:00:00'),
(38, 17, 1728401, FALSE, '2024-10-11 13:30:00'),
(39, 18, 1728402, FALSE, '2024-10-11 14:00:00'),
(40, 19, 1728403, FALSE, '2024-10-12 15:00:00'),
(41, 20, 1728404, FALSE, '2024-10-12 16:00:00'),
(42, 52, 1728398, FALSE, '2024-10-12 19:00:00'),
(43, 49, 1728398, FALSE, '2024-10-12 19:05:00'),
(44, 130, 1728398, FALSE, '2024-10-12 19:15:00');

-- 留言板
DROP TABLE IF EXISTS `event_comments`;
CREATE TABLE `event_comments` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `event_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `comment` TEXT NOT NULL, 
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`event_id`) REFERENCES `event_holding_list`(`event_id`) ON DELETE CASCADE,
  FOREIGN KEY (`user_id`) REFERENCES `user_data`(`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 匯入假資料
INSERT INTO `event_comments` (`id`, `event_id`, `user_id`, `comment`, `created_at`) VALUES
(1, 1728395, 1, '歡迎大家一起來參加活動！期待大家的參與。', '2024-10-10 15:00:40'),
(2, 1728395, 11, '這次露營地點真的很棒，風景很好。', '2024-10-11 10:15:00'),
(3, 1728396, 2, '這是我的第一次露營活動，期待！', '2024-10-11 11:30:00'),
(4, 1728396, 12, '家庭活動感覺很溫馨，大家一起加油！', '2024-10-12 12:45:00'),
(5, 1728397, 3, '心靈淨化的活動讓我很放鬆，大家一起享受自然吧！', '2024-10-12 13:15:00'),
(6, 1728397, 13, '這次活動主題太好了，冥想的時光最讓我期待！', '2024-10-12 14:30:00'),
(7, 1728398, 4, '新手露營體驗期待學到很多露營技巧！', '2024-10-13 09:00:00'),
(8, 1728398, 14, '新手露營的課程設計得很好，值得學習！', '2024-10-13 10:30:00'),
(9, 1728399, 5, '健行挑戰雖然辛苦，但也讓人充滿成就感。', '2024-10-14 08:45:00'),
(10, 1728399, 15, '這次健行的風景超級美，希望下次還能再來。', '2024-10-14 09:50:00'),
(11, 1728400, 6, '冬季露營挑戰真的是極限體驗，值得一試。', '2024-10-15 10:00:00'),
(12, 1728400, 16, '嚴寒露營對於耐寒裝備要求很高，感謝指導。', '2024-10-15 11:30:00');

-- product
DROP TABLE IF EXISTS `books`;
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

--
-- 資料表結構 `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` text NOT NULL,
  `notes` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `cart_items` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `orders`
--

INSERT INTO `orders` (`id`, `name`, `phone`, `email`, `address`, `notes`, `created_at`, `cart_items`) VALUES
(1, '測試一', '0988 615 336', 'cdefgab159357@gmail.com', '高雄市前金區', '測試內容', '2024-10-08 05:53:45', '[{\"name\":\"露營帳篷\",\"quantity\":5,\"price\":1300},{\"name\":\"露營帳篷\",\"quantity\":3,\"price\":1300},{\"name\":\"露營帳篷\",\"quantity\":9,\"price\":1300}]');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;
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
-- book-收藏 
CREATE TABLE `book_fav`
(
  `id` INT NOT NULL AUTO_INCREMENT,
  `room_type_id` int(11) NOT NULL,
  `user_id` int NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (user_id) REFERENCES user_data(user_id) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `book_fav` (`id`, `room_type_id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 2, 1, '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(2, 3, 1, '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(3, 2, 2, '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(4, 2, 3, '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(5, 4, 6, '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(6, 5, 8, '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(7, 7, 1, '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(8, 9, 7, '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(9, 6, 2, '2024-09-02 10:44:22', '2024-09-02 10:44:22'),
(10, 8, 3, '2024-09-02 10:44:22', '2024-09-02 10:44:22');


-- event
CREATE TABLE `event_fav`
(
  `id` INT NOT NULL AUTO_INCREMENT,
  `event_id` int(11) NOT NULL,
  `user_id` int NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (user_id) REFERENCES user_data(user_id) ON DELETE CASCADE
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

-- ----------------------------
-- not selected region
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
