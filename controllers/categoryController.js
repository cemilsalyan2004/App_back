const Category = require('./../models/CategoryModel');
const AppError = require('./../utils/appError');

exports.getCategories = async (req, res, next) => {
  try {
    console.log('got this 👍🏻')
    const categories = await Category.find();
    if (!categories) return next(new AppError('No category found.', 404));
    res.status(200).json({
      status: 'success',
      categories,
    });
  } catch (err) {
    return next(err);
  }
};
