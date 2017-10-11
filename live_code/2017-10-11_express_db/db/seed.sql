INSERT INTO species (species_name) VALUES
  ('cat'),
  ('dog'),
  ('tiger')
;

INSERT INTO pets (name, species_id) VALUES
  ('Astro', 2),
  ('Toto', 2),
  ('Hobbes', 3),
  ('Crookshanks', 1)
;

INSERT INTO owners (name) VALUES
  ('Hermione Granger'),
  ('Dorothy Gale'),
  ('George Jetson'),
  ('Jane Jetson'),
  ('Calvin')
;

INSERT INTO petowners (pet_id, owner_id) VALUES
  (4, 1),
  (3, 5),
  (2, 2),
  (1, 3),
  (1, 4)
;
