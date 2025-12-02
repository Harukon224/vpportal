{{
##
type       = ""    # 型
field_name = ""    # プライベート変数名
-}}
{{
func property_name()
  trimmed = field_name | string.remove_first "_"
  ret trimmed | string.slice 0 1 | string.upcase + (trimmed | string.slice 1)
end
-}}

private {{ type }} {{ field_name }};
public {{ type }} {{ property_name }}
{
    get => {{ field_name }};
    set => SetProperty(ref {{ field_name }}, value);
}