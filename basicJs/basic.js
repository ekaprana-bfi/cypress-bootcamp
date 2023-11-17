// cara buka terminal --> control + '
var nama = 'marco'; //menyiapkan tempat atau wadah

let nama2 = 'polo';

const bulan = 'mei';

// console.log (nama); //output ke console
// console.log (nama2);

// bulan = 'maret'
// console.log (bulan);

//contoh case boolean
let angka1 = 10;
let angka2 = 10;
// console.log (angka1 == angka2);

//contoh case array
const car = ['Pagani', 'BMW', 'Opel'];
let mobil = car[1];
car[2] = 'Tata';
car[3] = 'Honda';

// console.log (car);

//contoh case if else
// let umur = 17
// if(umur < 17){
//     console.log('ngga dapet ktp');
// }else{
//     console.log('dapet ktp :)');
// }

//contoh class

// class Mobil{
//     roda
// }

function persegi(baris, kolom) {
  for (let i = 1; i <= baris; i++) {
    let row = '';
    for (let j = 1; j <= kolom; j++) {
      if (i == 1 || i == baris || j == 1 || j == kolom) {
        // Tambahkan '*' untuk batas persegi
        row += '*';
      } else {
        // Tambahkan spasi untuk bagian tengah
        row += ' ';
      }
    }
    console.log(row);
  }
}

// Panggil fungsi untuk membuat persegi bolong tengah 5x5
persegi(5, 5);
