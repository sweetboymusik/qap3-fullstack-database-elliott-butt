CREATE TABLE public.items
(
    item_id serial NOT NULL,
    item_name character varying(256) NOT NULL,
    price numeric NOT NULL,
    category integer NOT NULL,
    description character varying(512) NOT NULL,
    image_url character varying(1024) NOT NULL,
    PRIMARY KEY (item_id),
    CONSTRAINT category FOREIGN KEY (category)
        REFERENCES public.category (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);