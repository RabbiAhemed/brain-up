import React from "react";
import { Button, Card, Form } from "react-bootstrap";

const Quiz = (quiz) => {
  //   console.log(typeof quiz);
  //   console.log(quiz.quiz);
  const { options, question, correctAnswer } = quiz.quiz;
  //   console.log(options);

  return (
    <div>
      <Card className="text-center">
        <Card.Body>
          <Card.Text>{question}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
          <input type="radio" id="html" name="fav_language" value="HTML" />
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default Quiz;
