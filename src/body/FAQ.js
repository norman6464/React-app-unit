import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: 'How much does the class cost?',
    answer: 'Please contact us for current pricing.',
  },
  {
    question: 'How long is the class?',
    answer: 'Each class is approximately 2 hours long.',
  },
  {
    question: 'What is the class size?',
    answer: 'We keep our class sizes small — usually 8-12 people.',
  },
  {
    question: 'Do I need any prior cooking experience?',
    answer: 'No prior experience is necessary!',
  },
  {
    question: 'Where is the class located?',
    answer: 'Classes are held at our downtown kitchen studio.',
  },
];

export default function FAQ() {
  return (
    <Box sx={{ backgroundColor: '#fdf8f5', py: 6 }}>
      <Container maxWidth="sm">
        <Typography
          variant="h4" // サイズを大きく
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: '1rem' }}>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}
