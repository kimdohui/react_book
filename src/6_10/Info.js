import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    console.log("렌더링이 완료되었습니다");
    console.log({ name, nickname });
  }, [name]);

  /*두번째 피라미터는 특정 값이 업데이트 될 때만 실행하고 싶을 때 실행함 */
  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>

      <div>
        <div>
          <b>이름 : </b> {name}
        </div>

        <div>
          <b>닉네임 : </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
