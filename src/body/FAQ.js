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
    question: 'クラスの料金はいくらですか？',
    answer: '現在の料金についてはお問い合わせください。',
  },
  {
    question: 'クラスの所要時間はどのくらいですか？',
    answer: '各クラスは約2時間です。',
  },
  {
    question: 'クラスの人数は何人ですか？',
    answer: '少人数制で、通常8〜12名です。',
  },
  {
    question: '料理経験は必要ですか？',
    answer: '特別な経験は必要ありません！',
  },
  {
    question: 'クラスの場所はどこですか？',
    answer: 'クラスは市内中心部のキッチンスタジオで開催されます。',
  },
];

export default function FAQ() {
  return (
    <Box sx={{ backgroundColor: '#fdf8f5', py: 6 }}>
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          よくある質問
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
