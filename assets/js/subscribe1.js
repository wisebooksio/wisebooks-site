var data = JSON.stringify($(".homesubscription"));
  
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });
  
  xhr.open("POST", "https://api.sendgrid.com/v3/contactdb/recipients");
  xhr.setRequestHeader("authorization", "Bearer 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");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.send(data);

