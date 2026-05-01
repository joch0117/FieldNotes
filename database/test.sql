USE fieldnotes

INSERT INTO users (username, email, password_hash)
VALUES
('jo','jo@test.com','$2b$12$geHcnF1eiGiA0PfZdX/kee.eXwT3h7MZJ/fFqFDWGXX1NUcizC0sq'),
('alice','alice@test.com','$2b$12$geHcnF1eiGiA0PfZdX/kee.eXwT3h7MZJ/fFqFDWGXX1NUcizC0sq');

INSERT INTO observations (title,category,content,user_id)
VALUES
(
    'Observation forêt',
    'Nature',
    'Présence importante de mousse humide près du ruisseau.',
    1
),
(
    'Lecture ADN',
    'Science',
    'Révision des codons start et stop.',
    1
),
(
    'Notes Linux',
    'Informatique',
    'Comprendre les appels système et les permissions.',
    2
);