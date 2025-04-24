SELECT user_id, first_name, last_name, email,
COUNT(distinct users)
FROM users
group by user_id, first_name, last_name, email;