import { useRef, useEffect } from "react";
import { useRouter } from "next/router";

export default function LanguageSwitch() {
  const select = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const activeLanguage = router?.locales?.find((el) => el === router.locale);
    select.current.value = activeLanguage;
  }, []);

  const handleChange = () => {
    // window.location.href = `/${select.current.value}${router.asPath}`;
    const tag = select.current.value;
    const { asPath } = router;
    router.push(asPath, asPath, { locale: tag });
  };

  return (
    <>
      <p>{"title"}</p>

      <select onChange={handleChange} ref={select}>
        {router?.locales?.map((language, index) => (
          <option key={index} value={language}>
            {language}
          </option>
        ))}
      </select>
    </>
  );
}
