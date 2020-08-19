HomeController = {
  startPage: async function (req, res) {
    var html = `
    <form action="/package" method="get" role="form" style="padding: 5vh;"> 
      <h3>GET /package</h3>
      <button type="submit">Submit</button> 
    </form>
    
    <form action="/package/:transaction_id" method="get" role="form" style="padding: 5vh;"> 
      <h3>GET /package/{id}</h3>
      <p>Transaction ID*</p>
      <input style="width: 300px;" type="text" name="transaction_id" placeholder="Transaction ID" required minlength="4" /> 
      <br> <br> 
      <button type="submit">Submit</button> 
    </form>
    
    <form action="/package" method="post" role="form" style="padding: 5vh;"> 
      <h3>POST /package</h3>
      <button type="submit">Submit</button> 
    </form>

    <form action="/package/:transaction_id" method="post" role="form" style="padding: 5vh;"> 
      <h3>PUT /package/{id}</h3>
      <p>Transaction ID*</p>
      <input style="width: 300px;" type="text" name="transaction_id" placeholder="Transaction ID" required minlength="4"/> 
      <br> 
      <p>Update Customer Code*</p>
      <input style="width: 300px;" type="text" name="customer_id_put" placeholder="Customer ID" minlength="4" /> 
      <br> <br> 
      <button type="submit">Submit</button> 
    </form>

    <form action="/package/:transaction_id" method="post" role="form" style="padding: 5vh;"> 
      <h3>PATCH /package/{id}</h3>
      <p>Transaction ID*</p>
      <input style="width: 300px;" type="text" name="transaction_id" placeholder="Transaction ID" required minlength="4" /> 
      <br> 
      <p>Update Customer Code*</p>
      <input style="width: 300px;" type="text" name="customer_id_patch" placeholder="Customer ID" minlength="4" /> 
      <br> <br> 
      <button type="submit">Submit</button> 
    </form>

    <form action="/package/:transaction_id_del" method="post" role="form" style="padding: 5vh;"> 
      <h3>DELETE /package/{id}</h3>
      <p>Transaction ID*</p>
      <input style="width: 300px;" type="text" name="transaction_id_del" placeholder="Transaction ID" required minlength="4" /> 
      <br> <br> 
      <button type="submit">Submit</button> 
    </form>

    <form action="/package/:transaction_id_restore" method="post" role="form" style="padding: 5vh;"> 
      <h3>RESTORE DATA</h3>
      <p>Transaction ID*</p>
      <input style="width: 300px;" type="text" name="transaction_id_restore" placeholder="Transaction ID" required minlength="4" /> 
      <br> <br> 
      <button type="submit">Submit</button> 
    </form>
    `;

    res.send(html);
  }
}

module.exports = HomeController;

