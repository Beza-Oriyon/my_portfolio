const express = require('express');
const { body, validationResult } = require('express-validator');

const router = express.Router();

// Contact Form Route
router.post('/', 
  [
    body('name')
      .trim()
      .notEmpty().withMessage('Name is required')
      .isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
    
    body('email')
      .trim()
      .isEmail().withMessage('Please provide a valid email'),
    
    body('message')
      .trim()
      .notEmpty().withMessage('Message is required')
      .isLength({ max: 500 }).withMessage('Message cannot exceed 500 words')
      .isLength({ min: 10 }).withMessage('Message should be at least 10 characters')
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        errors: errors.array() 
      });
    }

    const { name, email, message } = req.body;

    console.log('New Contact Form Submission:');
    console.log({ name, email, message });

    

    res.status(201).json({
      success: true,
      message: 'Thank you! I have received your message🙏.'
    });
  }
);

module.exports = router;