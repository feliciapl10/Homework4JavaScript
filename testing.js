function randomNumber(max){
    return Math.floor(Math.random()* max); // math.floor supaya angkanya bulat ke bawah
}

number = []; // array
for (i = 0; i < 100; i++){
    number.push(randomNumber(50)); // cari 50 angka random dalam arraynya
}

numberGanjil = []; // dari index 0-99 tidak dapat dibagi dua (ganjil) masuk array numberGanjil
numberGenap = []; // sedangkan yang genap masuk array numberGenap
for (i= 0; i < number.length; i++){
    if (number[i]%2 == 0){
        numberGenap.push(number[i]);
    } else {
        numberGanjil.push(number[i]);
    }
}

minGanjil = numberGanjil[0]; // hitung dari index ke 0 pada array numberGanjil
maxGanjil = numberGanjil[0]; // hitung dari index ke 0 pada array numberGanjil
sumGanjil = 0; // si jumlah nilai parameter awalnya 0
let hasil;
for (i = 0; i < numberGanjil.length; i++){ // untuk indeks bernilai 0 jika angkanya lebih kecil dari panjang numberGanjil yang isinya ada 50, maka akan terus looping.
    if (numberGanjil[i] < minGanjil){
        minGanjil = numberGanjil[i]; // cari di dalam array numberGanjil dari total 50 index itu angka paling kecilnya berapa
    }
    if (numberGanjil[i] > maxGanjil){
        maxGanjil = numberGanjil[i]; // cari di dalam array numberGanjil dari total 50 index itu angka paling besarnya berapa
    }
    sumGanjil = sumGanjil + numberGanjil[i]; // ditulis sum_ganjil = sum_ganjil supaya ngitungnya dari angka pertama (indeks ke 0), bukan manggil angka random dalam array si numberGanjil, ada parameternya dari 0.
}
rataGanjil = sumGanjil / numberGanjil.length;

minGenap = numberGenap[0];
maxGenap = numberGenap[0];
sumGenap = 0;
let hasilGenap;
for (i = 0; i < numberGenap.length; i++){
    if (numberGenap[i] > maxGenap) {
        maxGenap = numberGenap[i];
    }
    if (numberGenap[i] < minGenap) {
        minGenap = numberGenap[i];
    }
    sumGenap = sumGenap + numberGenap[i];
}
rataGenap = sumGenap / numberGenap.length;

if (minGenap > minGanjil){
    console.log("nilai minimal pada array genap lebih besar");
} else if (minGenap < minGanjil){
    console.log("nilai minimal pada array ganjil lebih besar");
} else if ((minGenap = minGanjil)){
    console.log("min memiliki nilai sama antara array genap dan array ganjil");
}

if (maxGenap > maxGanjil){
    console.log("nilai maksimal pada array genap lebih besar");
} else if (maxGenap < maxGanjil){
    console.log("nilai maksimal pada array ganjil lebih besar");
} else if ((maxGenap = maxGanjil)){
    console.log("max memiliki nilai sama antara array genap dan array ganjil");
}

if (sumGenap > sumGanjil){
    console.log("jumlah total pada array genap lebih besar");
} else if (sumGenap < sumGanjil){
    console.log("jumlah total pada array ganjil lebih besar");
} else if ((sumGenap = sumGanjil)){
    console.log("jumlah total antara array genap dan array ganjil sama besar");
}

if (rataGenap > rataGanjil){
    console.log("rata-rata lebih besar array genap");
} else if (rataGenap < rataGanjil){
    console.log("rata-rata lebih besar array ganjil");
} else if ((rataGenap = rataGanjil)){
    console.log("rata-rata memiliki nilai sama antara array genap dan array ganjil");
}

console.log("nilai array" , number);
console.log("angka-angka ganjil: " , numberGanjil);
console.log("angka-angka genap: " , numberGenap);
console.log("nilai minimal ganjil: " , minGanjil);
console.log("nilai maksimal ganjil: " , maxGanjil);
console.log("nilai minimal genap: " , minGenap);
console.log("nilai maksimal genap: " , maxGenap);
console.log("jumlah total angka-angka ganjil: " , sumGanjil);
console.log("jumlah total angka-angka genap: " , sumGenap);
console.log("hasil rata-rata nilai ganjil: " , rataGanjil);
console.log("hasil rata-rata nilai genap: " , rataGenap);
