document.addEventListener("DOMContentLoaded",()=>{
    const shufflebutton= document.getElementById("shuffle");
    const TableBody= document.querySelector("#dior-playlist tbody");

    shufflebutton. addEventListener("click",()=>{
        const rows = Array.from(
            TableBody.querySelectorAll("tr.single-song")
        );
        rows. sort(()=>Math.random()-0.5);
        rows. forEach((row)=>{
            TableBody.appendChild(row);
        });
    });
});

document.addEventListener("DOMContentLoaded",()=>{
    const SongTitle= document.getElementById("song-title");
    const SingerName= document.getElementById("singer-name");
    const SongDuration= document.getElementById("song-duration")
    const SongButton= document.getElementById("add-song");
    const TableBody= document.querySelector("#dior-playlist tbody");

    SongButton.addEventListener("click",(Event)=>{
        Event.preventDefault();
    
        const SongInput= SongTitle.value.trim();
        const SingerInput= SingerName.value.trim();
        const DurationInput= SongDuration.value.trim();

        if(!SongInput || !SingerInput || !DurationInput){
            return;
        }
    const NewSong= document.createElement("tr");
    NewSong.classList.add("single-song");

    NewSong.innerHTML=`
        <td></td>
        <td class="title">${SongInput}</td>
        <td class="singer">${SingerInput}</td>
        <td class="duration“>${DurationInput}</td>
        `;
    TableBody.appendChild(NewSong);

    SongTitle.value="";
    SingerName.value="";
    SongDuration.value="";
    SongTitle.focus();

    });
});