SELECT p.name, o.name FROM owners AS o
JOIN petowners AS pown
  ON o.owner_id = pown.owner_id
JOIN pets AS p
  ON p.pet_id = pown.pet_id
;
