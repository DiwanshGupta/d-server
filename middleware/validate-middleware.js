const validate = (schema) => async (req, res, next) => {
  try {
    const parsebody = await schema.parseAsync(req.body);
    req.body = parsebody;
    next();
  } catch (error) {
    const errormsg = error.errors[0].message;
    res.status(400).json({ message: errormsg });
  }
};
module.exports = validate;
