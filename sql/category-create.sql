CREATE TABLE public.category
(
    id integer NOT NULL DEFAULT nextval('category_id_seq'::regclass),
    name character varying(256) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT category_pkey PRIMARY KEY (id)
);