INSERT INTO public_feedback (name, message, created_at, is_public)
SELECT
  'Liah',
  'This is a huge and impressive update! What motivated you to get back and continue this website ''cause it has been so long since you worked on this???? Honestly I don''t know how the updates look like in desktop especially the album part (if it has some kind of transitions and such..) since I''m only viewing it now on my phone. The dialogue parts were good (I hope hindi galing sa AI😅) Pwede ka nang maging philosopher haha. My question is, will there be more updates soon or this is it na??? I hope meron pa. Iyon lang!! Galeng!',
  '2026-06-04T02:03:00.000Z',
  1
WHERE NOT EXISTS (
  SELECT 1
  FROM public_feedback
  WHERE name = 'Liah'
    AND created_at = '2026-06-04T02:03:00.000Z'
);
