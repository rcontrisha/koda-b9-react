import { useSelector, useDispatch } from "react-redux";
import { handleSubmit, removeRow } from "../redux/slices/SurveySlice";
import { useState } from "react";
import Header from "../components/Header";

function Form() {
  const [data, setData] = useState(null);
  const [gender, setGender] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.surveyState);

  return (
    <>
      <Header title={"Survey"} />
      <main className="py-8 px-4 grid grid-cols-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              handleSubmit({
                ...data,
                gender: gender,
                genre: data.genre.split(","),
              }),
            );
          }}
        >
          <div className="flex flex-col gap-2 w-100">
            <label htmlFor="nama">Nama</label>
            <input
              className="border border-gray-400 px-2 py-1"
              type="text"
              name="nama"
              id="nama"
              onChange={(e) => setData({ ...data, nama: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-2 w-100">
            <label htmlFor="umur">Umur</label>
            <input
              className="border border-gray-400 px-2 py-1"
              type="number"
              name="umur"
              id="umur"
              onChange={(e) => setData({ ...data, umur: e.target.value })}
            />
          </div>
          <div>
            <p>Jenis Kelamin</p>
            <div>
              {["Laki-laki", "Perempuan"].map((v) => {
                return (
                  <RadioInput
                    key={v}
                    name="gender"
                    id={v}
                    text={v}
                    checked={v === gender}
                    onChange={() => {
                      setGender(v);
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div className="w-100">
            <label for="hobi">Apakah anda hobi menonton film?</label>
            <select
              className="border border-gray-400 ml-2"
              id="hobi"
              onChange={(e) => setData({ ...data, hobi: e.target.value })}
            >
              <option value="" disabled selected>
                Pilih jawaban
              </option>
              <option value="ya">Ya</option>
              <option value="tidak">Tidak</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 w-100">
            <label htmlFor="genre">
              Genre Film yg Disukai (Pisahkan dengan tanda koma, tanpa spasi)
            </label>
            <input
              className="border border-gray-400 px-2 py-1"
              type="text"
              name="genre"
              id="genre"
              onChange={(e) => setData({ ...data, genre: e.target.value })}
            />
          </div>
          <div className="flex justify-end w-100">
            <button
              type="submit"
              className="px-3 py-1.5 bg-blue-500 text-white rounded-lg mt-3"
            >
              Submit Form
            </button>
          </div>
        </form>
        <div className="grid grid-cols-6 auto-rows-min">
          <div className="py-2">Nama</div>
          <div className="py-2">Umur</div>
          <div className="py-2">Jenis Kelamin</div>
          <div className="py-2">Hobi Nonton?</div>
          <div className="py-2">Genre</div>
          <div className="py-2">Action</div>

          {state.surveyData.map((user) => {
            return (
              <>
                <div className="py-2">{user.nama}</div>
                <div className="py-2">{user.umur}</div>
                <div className="py-2">{user.gender}</div>
                <div className="py-2">{user.hobi}</div>
                <div className="py-2">{user.genre.join(", ")}</div>
                <button
                  className="px-3 py-2 bg-red-500 text-white w-fit"
                  onClick={() => dispatch(removeRow(user.nama))}
                >
                  Delete
                </button>
              </>
            );
          })}
        </div>
      </main>
    </>
  );
}

function RadioInput({ name, id, text, checked, onChange }) {
  return (
    <div className="flex gap-3 items-center">
      <input
        type="radio"
        name={name}
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{text}</label>
    </div>
  );
}

export default Form;
