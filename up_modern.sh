scripts=(./scripts/*)

for opt in "${scripts[@]}"; do
    options=("${options[@]}" "${opt}" "")
done

cmd=(dialog --menu "Select_user:" 0 0 0)
CHOICE=$("${cmd[@]}" "${options[@]}" 2>&1 >/dev/tty)
shopt -s checkwinsize
bash "$CHOICE"
