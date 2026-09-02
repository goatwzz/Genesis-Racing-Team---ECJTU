-- 在 Supabase 项目的 SQL Editor 中完整运行一次。
create table if not exists public.site_likes (
  id text primary key,
  like_count bigint not null default 0 check (like_count >= 0)
);

insert into public.site_likes (id, like_count)
values ('genesis-home', 0)
on conflict (id) do nothing;

alter table public.site_likes enable row level security;

revoke all on table public.site_likes from anon, authenticated;

create or replace function public.get_site_likes()
returns bigint
language sql
stable
security definer
set search_path = public
as $$
  select like_count from public.site_likes where id = 'genesis-home';
$$;

create or replace function public.increment_site_likes()
returns bigint
language sql
volatile
security definer
set search_path = public
as $$
  update public.site_likes
  set like_count = like_count + 1
  where id = 'genesis-home'
  returning like_count;
$$;

revoke all on function public.get_site_likes() from public;
revoke all on function public.increment_site_likes() from public;
grant execute on function public.get_site_likes() to anon, authenticated;
grant execute on function public.increment_site_likes() to anon, authenticated;
