const argument = process.argv.slice(2);

function DaireAlanHesapla(yaricap)
{
    let result = Math.PI * Math.pow(yaricap,2);
    console.log(`Yarıçapı (${yaricap}) olan dairenin alanı: (${result}) `);
}
DaireAlanHesapla(argument[0]*1);