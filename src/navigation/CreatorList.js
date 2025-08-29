import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';

function CreatorCard({ icon, title, url, description }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 3,
        py: 3,
      }}
    >
      <Avatar
        sx={{
          bgcolor: icon.bgColor,
          width: 80,
          height: 80,
          fontWeight: 'bold',
          fontSize: 24,
        }}
      >
        {icon.content}
      </Avatar>

      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          color="primary"
        >
          {url}
        </Link>
      </Box>

      <Typography sx={{ flex: 1 }}>{description}</Typography>
    </Box>
  );
}

export default function CreatorList() {
  const creators = [
    {
      icon: { bgColor: 'black', content: 'W' },
      title: 'Web Developer',
      url: 'https://webdeveloper.com',
      description:
        "Web Developer is the ultimate online web developer community. You'll find articles, tutorials, questions and answers, jobs, tools, and more - all from web developers in the community!",
    },
    {
      icon: { bgColor: '#39a9f5', content: 'JOBS' },
      title: 'Authentic Jobs',
      url: 'https://authenticjobs.com',
      description:
        'Authentic Jobs has been and continues to be the leading job board for designers, developers, and creative pros. Find jobs or post your own to connect with quality creators.',
    },
    {
      icon: { bgColor: '#f5b800', content: 'WR' },
      title: 'Web Reference',
      url: 'https://webreference.com',
      description:
        "The Web's original (created in 1995!) and one of the most respected web development resources. Learn how to build for the Web, and have some fun. HTML, CSS, JavaScript, and much more!",
    },
  ];

  return (
    <Box sx={{ maxWidth: 960, mx: 'auto', px: 2, py: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Who's behind this?
      </Typography>
      <Typography gutterBottom>
        We're a team of creators building on the web full-time. You might have
        seen our work:
      </Typography>

      {creators.map((creator, i) => (
        <React.Fragment key={creator.title}>
          <CreatorCard {...creator} />
          {i < creators.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </Box>
  );
}
