export const trending = (req, res) => res.render("home");
export const see = (req, res) => {
  return res.send(
    `<!DOCTYPE html><html lang='ko'><head><title>Wetube</title></head><body><h1>Watch video #${req.params.id}</h1><footer>&copy;2021 Wetube -  All rights reserved</footer></body></html>`