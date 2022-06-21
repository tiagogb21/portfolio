import { NextApiRequest, NextApiResponse } from "next";

import { services } from "../../data";

const service = (req: NextApiRequest, res: NextApiResponse) => {
  //BY default get request

  console.log("API", services);

  res.status(200).json({ services });
};

export default service;
