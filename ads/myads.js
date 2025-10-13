function myads() {
    const insurancedata = `[
    {
        "sno": 1,
        "insurancetype": "Primary",
        "costpermonth": 1000
    }
    ,
     {
        "sno": 2,
        "insurancetype": "family",
        "costpermonth": 15000
    },
     {
        "sno": 3,
        "insurancetype": "car",
        "costpermonth": 2000
    }
    , {
        "sno": 4,
        "insurancetype": "Primary",
        "costpermonth": 1000
    }
]`;
    const insurances = JSON.parse(insurancedata);
    // alert("hello");?
    // let arr = ["Add1", "aqrr2", "3333", "4444"];
    let n = insurances.length;
    let dd = document.getElementById("ads");
    let index = Math.random();
    index = index * insurances.length;

    // index.Math = Number(index);
    index = Math.floor(index);
    const selectedinsurance = insurances[index];
    const currentad = `<div>
            <h1>${selectedinsurance.insurancetype}</h1>
        </div>
        <div>
            <h1>₹${selectedinsurance.costpermonth}</h1>
        </div>
          <div><a href="https://wa.me/917985439176?text=Your Insurance type is ${selectedinsurance.insurancetype} and cost per month is ₹${selectedinsurance.costpermonth}">Check your Insurance on whatsapp</a></div>`;
    dd.innerHTML = currentad;

}

myads();




{/* <a class="crx_btn"" target="_blank" rel="noopener" style="background:#25d366; color:#fff; text-decoration:none; padding:6px 12px; border-radius:4px; font-size:14px; display:inline-block;">Contact Me</a> */ }