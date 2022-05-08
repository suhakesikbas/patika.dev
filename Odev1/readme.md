# Ödev 1
## Node.JS Komut Satırı Kullanımı

Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır. Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız. Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.

Kolay gelsin.
```js
    const argument = process.argv.slice(2);

    function DaireAlanHesapla(yaricap)
    {
        let result = Math.PI * Math.pow(yaricap,2);
        console.log(`Yarıçapı (${yaricap}) olan dairenin alanı: (${result}) `);
    }
    DaireAlanHesapla(argument[0]*1);
```