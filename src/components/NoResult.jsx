import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for animations
const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
`;

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  border-radius: 12px;
  background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
  background-size: 200% 200%;
  animation: ${gradient} 10s ease infinite;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  color: white;
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #8758FF;
`;

const Message = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: #a8a8a8;
`;

const RetryButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: white;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  border: none;
  border-radius: 25px;
  cursor: pointer;
  animation: ${pulse} 2s infinite;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

// Component
const NoResults = ({ onRetry }) => {
  return (
    <Container>
      <Title>No Movies Found</Title>
      <Message>
        Oops! We couldn't find any movies. Please check your spelling or try a
        different search.
      </Message>
      <RetryButton onClick={onRetry}>Try Again</RetryButton>
    </Container>
  );
};

export default NoResults;