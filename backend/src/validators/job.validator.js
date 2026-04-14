const { z } = require('zod');

exports.jobSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  company: z.string().min(3, 'Company must be at least 3 characters'),
  status: z.enum(['Applied', 'Interview', 'Offer', 'Rejected']).default('Applied'),
});

exports.updateStatusSchema = z.object({
  status: z.enum(['Applied', 'Interview', 'Offer', 'Rejected'], {
    message: 'Invalid status value'
  }),
});