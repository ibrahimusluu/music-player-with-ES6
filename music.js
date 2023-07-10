class Music {
  constructor(title, singer, img, file) {
    this.title = title;
    this.singer = singer;
    this.img = img;
    this.file = file;
  }

  getName() {
    return this.title + " - " + this.singer;
  }
}

const musicList = [
  new Music(
    "Huawei",
    "Advertisement Clip",
    "1.png",
    "Yeni Huawei P Smart 2019 Reklam Filmi.mp3"
  ),
  new Music(
    "Close Your Eyes",
    "Murat",
    "2.png",
    "close-your-eyes-6p2rjvkxHP-0.mp3"
  ),
  new Music("Mehteri Cihan", "Alparslan", "1.png", "Mehteri Cihan.mp3"),
];
