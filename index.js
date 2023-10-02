let data;

fetch('https://script.google.com/macros/s/AKfycbyfHDRc3rguRqUaXFM-Cmr0yI60iEiTERNVpMcedAwcEOSy6Onh5__i__xcqwzg4RPcIg/exec')
.then(res => res.json())
.then(res => {
    data = res;
    console.log(data);
})