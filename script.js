const banner = document.getElementsByClassName('banner')[0],
  blocks = document.getElementsByClassName('blocks');

for (let i = 1; i < 400; i++) {
  banner.innerHTML += "<div class='blocks'></div>";
}
