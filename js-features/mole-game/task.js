const kills = document.getElementById('dead');
const misses = document.getElementById('lost');

getHole = index => document.getElementById(`hole${index}`);

for (index = 1; index <= 9; index++) {
    let hole = getHole(index);
    hole.onclick = () => {
      if (hole.className.includes('hole_has-mole')) {
        kills.textContent = Number(kills.textContent) + 1;
        if (Number(kills.textContent) == 10 && Number(misses.textContent) < 5) {
            alert(' Вы победили!');
            kills.textContent = 0;
            misses.textContent = 0;
        }
        } else {
            misses.textContent = Number(misses.textContent) + 1;
            if (Number(misses.textContent) == 5 && Number(kills.textContent) < 10) {
                alert('Вы проиграли.');
                kills.textContent = 0;
                misses.textContent = 0;
            }
        }  
    }
}