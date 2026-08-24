CREATE TABLE IF NOT EXISTS public.duty
(
    id uuid NOT NULL,
    name character varying(20) NOT NULL,
    CONSTRAINT duty_pkey PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS public.duty
    OWNER TO postgres;

INSERT INTO public.duty (id, name)
VALUES (
    '716ac41f-9ab5-4f7c-81b7-374866d021aa',
    'Example.'
);