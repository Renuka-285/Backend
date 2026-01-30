import { supabase } from '../config/supabase.js';

export const validateCreateUser = (req, res, next) => {
  const { name, email, password, age } = req.body;

  if (!name || name.trim() === '') {
    return res.status(400).json({ error: 'Name is required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  if (!password || password.length < 8) {
    return res
      .status(400)
      .json({ error: 'Password must be at least 8 characters' });
  }

  if (age !== undefined) {
    if (typeof age !== 'number' || age < 18) {
      return res
        .status(400)
        .json({ error: 'Age must be a number and ≥ 18' });
    }
  }

  next();
};
export const validateUserId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('users')
      .select('id')
      .eq('id', id)
      .single();

    if (error || !data) {
      return res.status(404).json({ error: 'User not found' });
    }

    req.user = data;

    next();
  } catch (err) {
    next(err);
  }
};
