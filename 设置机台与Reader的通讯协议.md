### 厂内威家骅的收放板机与立方兴的Reader（读码器）的**通信协议相关说明**：  
- **放板机**只存在 CST Reader，型号为DM60，即所谓的低阶Reader。  
- **收板机**除了上述 CST Reader 之外，还会存在 Panel Reader，Panel Reader 型号或为DM60，或为DM374。  
- 三菱PLC的MC通信协议，对应立方兴的是SLMP通信协议。  
### 厂内威家骅的收放板机与立方兴的Reader（读码器）的**通信协议设置步骤**：  
1. 打开DataMan v6.2.5软件，`刷新`，双击进入需要设置的Reader。  
2. 依照实际情况导入配置文件，配置文件位于同文件夹内的`04_Reader设置`。  
![Reader重启](.\Reader重启.png)
3. 如需修改端口及IP地址，**保存后需要重启Reader**。  