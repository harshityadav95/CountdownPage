const Web=require("webwebweb");
Web.APIs["/countdown"]=(qs , body, opts) => {

    const yearend=  new Date("December 31, 2024 11:59:00");
    const today = new Date();
    const diff = yearend-today;
    return{
        yearend,
        today,
        timeuntil:diff

    };

};
Web.Run(8080);